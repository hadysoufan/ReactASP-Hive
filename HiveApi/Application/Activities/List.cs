using Application.Core;
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
        public class Query : IRequest<Result<List<Activity>>> { }

        /// <summary>
        /// Represents a handler for the <see cref="Query"/> request.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataContext _context;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class with the specified data context.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context)
            {
                _context = context;
            }

            /// <summary>
            /// Handles the <see cref="Query"/> request to retrieve a list of activities.
            /// </summary>
            /// <param name="request">The query request.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result containing the list of activities.</returns>
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Activity>>.Success(await _context.Activities.ToListAsync());
            }
        }
    }
}
