using Domain.Entities;
using MediatR;
using Persistence;

namespace Application.Posts
{
    /// <summary>
    /// Represents the functionality to retrieve details of a post.
    /// </summary>
    public class PostDetails
    {
        /// <summary>
        /// Represents the query to retrieve details of a post.
        /// </summary>
        public class Query : IRequest<Post>
        {
            /// <summary>
            /// Gets or sets the unique identifier of the post.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Represents the handler for retrieving details of a post.
        /// </summary>
        public class Handler : IRequestHandler<Query, Post>
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
            /// Handles the retrieval of details for a post.
            /// </summary>
            /// <param name="request">The query to retrieve post details.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task representing the asynchronous operation and returning the post details.</returns>
            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Posts.FindAsync(request.Id);
            }
        }
    }
}
