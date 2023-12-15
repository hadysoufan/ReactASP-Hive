using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    /// <summary>
    /// Represents a query to retrieve a list of activities.
    /// </summary>
    public class List
    {
        /// <summary>
        /// Represents a query request to retrieve a list of activities.
        /// </summary>
        public class Query : IRequest<Result<List<ActivityDTO>>> { }

        /// <summary>
        /// Represents a handler for the <see cref="Query"/> request.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<List<ActivityDTO>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class with the specified data context.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            /// <summary>
            /// Handles the <see cref="Query"/> request to retrieve a list of activities.
            /// </summary>
            /// <param name="request">The query request.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result containing the list of activities.</returns>
            public async Task<Result<List<ActivityDTO>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities
                    .ProjectTo<ActivityDTO>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                return Result<List<ActivityDTO>>.Success(activities);
            }
        }
    }
}
