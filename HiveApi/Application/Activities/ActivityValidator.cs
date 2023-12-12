using Domain.Entities;
using FluentValidation;

namespace Application.Activities
{
    /// <summary>
    /// Validator for the <see cref="Activity"/> class.
    /// </summary>
    public class ActivityValidator : AbstractValidator<Activity>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActivityValidator"/> class.
        /// </summary>
        public ActivityValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.Category).NotEmpty();
            RuleFor(x => x.City).NotEmpty();
            RuleFor(x => x.Venue).NotEmpty();
        }
    }
}
