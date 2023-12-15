using Domain.Entities;
using MediatR;
using Persistence;

namespace Application.Posts
{
    /// <summary>
    /// Represents the functionality to create a new post.
    /// </summary>
    public class PostCreate
    {
        /// <summary>
        /// Represents the command to create a new post.
        /// </summary>
        public class Command : IRequest
        {
            /// <summary>
            /// Gets or sets the post to be created.
            /// </summary>
            public Post Post { get; set; }
        }

        /// <summary>
        /// Represents the handler for creating a new post.
        /// </summary>
        public class Handler : IRequestHandler<Command>
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
            /// Handles the creation of a new post.
            /// </summary>
            /// <param name="request">The create post command.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task representing the asynchronous operation.</returns>
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Posts.Add(request.Post);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
