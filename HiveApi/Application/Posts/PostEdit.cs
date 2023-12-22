using Application.Core;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Persistence;

namespace Application.Posts
{
    /// <summary>
    /// Represents the functionality to edit a post.
    /// </summary>
    public class PostEdit
    {
        /// <summary>
        /// Represents the command to edit a post.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the post with updated information.
            /// </summary>
            public Post Post { get; set; }
        }

        /// <summary>
        /// Represents the handler for editing a post.
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
            /// Handles the editing of a post.
            /// </summary>
            /// <param name="request">The edit post command.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task representing the asynchronous operation.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Post.Id);

                if (post is null) return null;

                _mapper.Map(request.Post, post);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to update post");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
