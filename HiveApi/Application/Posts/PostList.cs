using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Posts
{
    /// <summary>
    /// Represents the functionality to retrieve a list of posts.
    /// </summary>
    public class PostList
    {
        /// <summary>
        /// Represents the query to retrieve a list of posts.
        /// </summary>
        public class Query : IRequest<List<Post>> { }

        /// <summary>
        /// Represents the handler for retrieving a list of posts.
        /// </summary>
        public class Handler : IRequestHandler<Query, List<Post>>
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
            /// Handles the retrieval of a list of posts.
            /// </summary>
            /// <param name="request">The query to retrieve the list of posts.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task representing the asynchronous operation and returning the list of posts.</returns>
            public async Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Posts.ToListAsync();
            }
        }
    }
}
