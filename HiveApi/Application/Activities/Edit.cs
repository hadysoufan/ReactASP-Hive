using Application.Core;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    /// <summary>
    /// Represents the "Edit" functionality for activities.
    /// </summary>
    public class Edit
    {
        /// <summary>
        /// Represents the command to edit an activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the activity to be edited.
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
        /// Handler for the <see cref="Command"/> to edit an activity.
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
            /// Handles the <see cref="Command"/> to edit an activity.
            /// </summary>
            /// <param name="request">The command to edit an activity.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result indicating success or failure.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                if (activity is null)
                    return Result<Unit>.Failure("Activity not found");

                _mapper.Map(request.Activity, activity);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to edit activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
