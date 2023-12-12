using Application.Core;
using MediatR;
using Persistence;

namespace Application.Activities
{
    /// <summary>
    /// Represents the "Delete" functionality for activities.
    /// </summary>
    public class Delete
    {
        /// <summary>
        /// Represents the command to delete an activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the ID of the activity to be deleted.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handler for the <see cref="Command"/> to delete an activity.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context)
            {
                _context = context;
            }

            /// <summary>
            /// Handles the <see cref="Command"/> to delete an activity.
            /// </summary>
            /// <param name="request">The command to delete an activity.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result indicating success or failure.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity is null)
                    return Result<Unit>.Failure("Activity not found");

                _context.Remove(activity);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to delete activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
