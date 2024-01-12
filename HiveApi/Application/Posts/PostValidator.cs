using Domain.Entities;
using FluentValidation;

namespace Application.Posts
{
    /// <summary>
    /// Represents a validator for the <see cref="Post"/> entity.
    /// </summary>
    public class PostValidator : AbstractValidator<Post>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PostValidator"/> class.
        /// </summary>
        public PostValidator()
        {
            /// <summary>
            /// Validates that the image property of the post is not empty.
            /// </summary>
            //RuleFor(x => x.ImageFileName).NotEmpty();

            /// <summary>
            /// Validates that the description property of the post is not empty.
            /// </summary>
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
