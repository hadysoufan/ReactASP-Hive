using Application.Core;
using Application.Interface;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Followers
{
    /// <summary>
    /// Represents functionality to toggle following status for a user.
    /// </summary>
    public class FollowToggle
    {
        /// <summary>
        /// Represents a command to toggle following status for a user.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the username of the user to follow or unfollow.
            /// </summary>
            public string TargetUsername { get; set; }
        }

        /// <summary>
        /// Represents the handler for the <see cref="Command"/> to toggle following status.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The database context.</param>
            /// <param name="userAccessor">The user accessor for retrieving user information.</param>
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            /// <summary>
            /// Handles the toggling of following status for a user.
            /// </summary>
            /// <param name="request">The command to toggle following status.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result indicating success or failure.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var observer = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                var target = await _context.Users.FirstOrDefaultAsync(x => x.UserName == request.TargetUsername);

                if (target is null)
                {
                    return Result<Unit>.Failure("Target user not found");
                }

                var following = await _context.UserFollowings.FindAsync(observer.Id, target.Id);

                if (following is null)
                {
                    following = new UserFollowing
                    {
                        Observer = observer,
                        Target = target
                    };

                    _context.UserFollowings.Add(following);
                }
                else
                {
                    _context.UserFollowings.Remove(following);
                }

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                Console.WriteLine($"Observer ID: {observer?.Id}");
                Console.WriteLine($"Target ID: {target?.Id}");

                return Result<Unit>.Failure("Failed to update following");
            }
        }
    }
}
