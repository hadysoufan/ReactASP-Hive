using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    /// <summary>
    /// Represents the "Details" functionality for activities.
    /// </summary>
    public class Details
    {
        /// <summary>
        /// Represents the query to retrieve details of an activity.
        /// </summary>
        public class Query : IRequest<Result<ActivityDTO>>
        {
            /// <summary>
            /// Gets or sets the ID of the activity for which details are requested.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handler for the <see cref="Query"/> to retrieve details of an activity.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<ActivityDTO>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            /// <summary>
            /// Handles the <see cref="Query"/> to retrieve details of an activity.
            /// </summary>
            /// <param name="request">The query to retrieve details of an activity.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result containing the details of the activity.</returns>
            public async Task<Result<ActivityDTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities
                    .ProjectTo<ActivityDTO>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<ActivityDTO>.Success(activity);
            }
        }
    }
}
