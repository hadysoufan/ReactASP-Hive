using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles
{
    /// <summary>
    /// Represents the "Details" functionality for user profiles.
    /// </summary>
    public class Details
    {
        /// <summary>
        /// Represents the query to retrieve details of a user profile.
        /// </summary>
        public class Query : IRequest<Result<Profile>>
        {
            /// <summary>
            /// Gets or sets the username of the user whose profile details are requested.
            /// </summary>
            public string Username { get; set; }
        }

        /// <summary>
        /// Handler for the <see cref="Query"/> to retrieve details of a user profile.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<Profile>>
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
            /// Handles the <see cref="Query"/> to retrieve details of a user profile.
            /// </summary>
            /// <param name="request">The query to retrieve details of a user profile.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result indicating success or failure.</returns>
            public async Task<Result<Profile>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users
                    .ProjectTo<Profile>(_mapper.ConfigurationProvider)
                    .SingleOrDefaultAsync(x => x.Username == request.Username);

                if (user is null) return null;

                return Result<Profile>.Success(user);
            }
        }
    }
}
