using Application.Core;
using Application.Interface;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    /// <summary>
    /// Represents the "Create" functionality for activities.
    /// </summary>
    public class Create
    {
        /// <summary>
        /// Represents the command to create a new activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the activity to be created.
            /// </summary>
            public Activity Activity { get; set; }
        }

        /// <summary>
        /// Validator for the <see cref="Command"/> class.
        /// </summary>
        public class CommandValidator : AbstractValidator<Command>
        {
            /// <summary>
            /// Initializes a new instance of the <see cref="CommandValidator"/> class.
            /// </summary>
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }

        /// <summary>
        /// Handler for the <see cref="Command"/> to create a new activity.
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
            /// Handles the <see cref="Command"/> to create a new activity.
            /// </summary>
            /// <param name="request">The command to create a new activity.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result indicating success or failure.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                var attendee = new ActivityAttendee
                {
                    AppUser = user,
                    Activity = request.Activity,
                    isHost = true
                };

                request.Activity.Attendees.Add(attendee);

                _context.Activities.Add(request.Activity);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to create activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
