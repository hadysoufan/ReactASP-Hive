using Application.Core;
using Application.Interface;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Followers
{
    /// <summary>
    /// Represents functionality to retrieve a list of followers or following profiles for a user.
    /// </summary>
    public class FollowersList
    {
        /// <summary>
        /// Represents a query to retrieve a list of followers or following profiles for a user.
        /// </summary>
        public class Query : IRequest<Result<List<Profiles.Profile>>>
        {
            /// <summary>
            /// Gets or sets the type of relationship to retrieve ("followers" or "following").
            /// </summary>
            public string Predicate { get; set; }

            /// <summary>
            /// Gets or sets the username of the user for whom to retrieve followers or following profiles.
            /// </summary>
            public string Username { get; set; }
        }

        /// <summary>
        /// Represents the handler for the <see cref="Query"/> to retrieve followers or following profiles.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<List<Profiles.Profile>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The database context.</param>
            /// <param name="mapper">The AutoMapper instance.</param>
            /// <param name="userAccessor">The user accessor for retrieving user information.</param>
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
                _userAccessor = userAccessor;
            }

            /// <summary>
            /// Handles the retrieval of followers or following profiles for a user.
            /// </summary>
            /// <param name="request">The query to retrieve followers or following profiles.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result containing the list of profiles or an error message.</returns>
            public async Task<Result<List<Profiles.Profile>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var profiles = new List<Profiles.Profile>();

                switch (request.Predicate)
                {
                    case "followers":
                        profiles = await _context.UserFollowings.Where(x => x.Target.UserName == request.Username)
                            .Select(u => u.Observer)
                            .ProjectTo<Profiles.Profile>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                            .ToListAsync();
                        break;

                    case "following":
                        profiles = await _context.UserFollowings.Where(x => x.Observer.UserName == request.Username)
                            .Select(u => u.Target)
                            .ProjectTo<Profiles.Profile>(_mapper.ConfigurationProvider)
                            .ToListAsync();
                        break;
                }

                return Result<List<Profiles.Profile>>.Success(profiles);
            }
        }
    }
}
