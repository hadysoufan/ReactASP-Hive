using Application.Core;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Persistence;

namespace Application.Posts
{
    /// <summary>
    /// Represents the functionality to delete a post.
    /// </summary>
    public class PostDelete
    {
        /// <summary>
        /// Represents the command to delete a post.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the unique identifier of the post to be deleted.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Represents the handler for deleting a post.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            /// <param name="mapper">The AutoMapper instance.</param>
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            /// <summary>
            /// Handles the deletion of a post.
            /// </summary>
            /// <param name="request">The delete post command.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task representing the asynchronous operation.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Id);

                if (post is null) return null;

                _context.Remove(post);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete the post");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
