using Application.Core;
using Application.Interface;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    /// <summary>
    /// Represents the functionality to update attendance for an activity.
    /// </summary>
    public class UpdateAttendance
    {
        /// <summary>
        /// Represents the command to update attendance for an activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the unique identifier of the activity.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handler for the <see cref="Command"/> to update attendance for an activity.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            /// <param name="userAccessor">The user accessor.</param>
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            /// <summary>
            /// Handles the <see cref="Command"/> to update attendance for an activity.
            /// </summary>
            /// <param name="request">The command to update attendance for an activity.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result indicating success or failure.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities
                    .Include(a => a.Attendees).ThenInclude(u => u.AppUser)
                    .SingleOrDefaultAsync(x => x.Id == request.Id);

                if (activity is null) return null;

                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                if (user is null) return null;

                var hostUsername = activity.Attendees.FirstOrDefault(x => x.isHost)?.AppUser?.UserName;

                var attendance = activity.Attendees.FirstOrDefault(x => x.AppUser.UserName == user.UserName);

                if (attendance != null && hostUsername == user.UserName)
                    activity.IsCancelled = !activity.IsCancelled;

                if (attendance != null && hostUsername != user.UserName)
                    activity.Attendees.Remove(attendance);

                if (attendance is null)
                {
                    attendance = new ActivityAttendee
                    {
                        AppUser = user,
                        Activity = activity,
                        isHost = false
                    };

                    activity.Attendees.Add(attendance);
                }

                var results = await _context.SaveChangesAsync() > 0;

                return results ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Problem updating attendance");
            }
        }
    }
}
