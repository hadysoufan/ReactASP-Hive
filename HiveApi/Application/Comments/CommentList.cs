using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments
{
    /// <summary>
    /// Represents functionality to retrieve a list of comments for a specific activity.
    /// </summary>
    public class CommentList
    {
        /// <summary>
        /// Represents a query to retrieve a list of comments for a specific activity.
        /// </summary>
        public class Query : IRequest<Result<List<CommentDTO>>>
        {
            /// <summary>
            /// Gets or sets the ID of the activity for which comments are requested.
            /// </summary>
            public Guid ActivityId { get; set; }
        }

        /// <summary>
        /// Represents the handler for the <see cref="Query"/> to retrieve comments.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<List<CommentDTO>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The database context.</param>
            /// <param name="mapper">The AutoMapper instance.</param>
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            /// <summary>
            /// Handles the retrieval of comments for a specific activity.
            /// </summary>
            /// <param name="request">The query to retrieve comments.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result containing the list of comment DTOs or an error message.</returns>
            public async Task<Result<List<CommentDTO>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var comments = await _context.Comments
                    .Where(x => x.Activity.Id == request.ActivityId)
                    .OrderByDescending(x => x.CreatedAt)
                    .ProjectTo<CommentDTO>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                return Result<List<CommentDTO>>.Success(comments);
            }
        }
    }
}
