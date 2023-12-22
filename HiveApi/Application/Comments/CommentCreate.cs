using Application.Core;
using Application.Interface;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments
{
    /// <summary>
    /// Represents the functionality to create a new comment.
    /// </summary>
    public class CommentCreate
    {
        /// <summary>
        /// Represents the command to create a new comment.
        /// </summary>
        public class Command : IRequest<Result<CommentDTO>>
        {
            /// <summary>
            /// Gets or sets the body of the comment.
            /// </summary>
            public string Body { get; set; }

            /// <summary>
            /// Gets or sets the ID of the activity associated with the comment.
            /// </summary>
            public Guid ActivityId { get; set; }
        }

        /// <summary>
        /// Represents the validator for the <see cref="Command"/> class.
        /// </summary>
        public class CommandValidator : AbstractValidator<Command>
        {
            /// <summary>
            /// Initializes a new instance of the <see cref="CommandValidator"/> class.
            /// </summary>
            public CommandValidator()
            {
                RuleFor(x => x.Body).NotEmpty();
            }
        }

        /// <summary>
        /// Handles the creation of a new comment.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<CommentDTO>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The database context.</param>
            /// <param name="mapper">The AutoMapper instance.</param>
            /// <param name="userAccessor">The user accessor for retrieving user information.</param>
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
                _userAccessor = userAccessor;
            }

            /// <summary>
            /// Handles the creation of a new comment.
            /// </summary>
            /// <param name="request">The command to create a new comment.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A result containing the created comment DTO or an error message.</returns>
            public async Task<Result<CommentDTO>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.ActivityId);

                if (activity is null) return null;

                var user = await _context.Users
                    .Include(p => p.Photos)
                    .SingleOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                var comment = new Comment
                {
                    Author = user,
                    Activity = activity,
                    Body = request.Body
                }; 

                activity.Comments.Add(comment);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Result<CommentDTO>.Success(_mapper.Map<CommentDTO>(comment));

                return Result<CommentDTO>.Failure("Failed to add comment");

            }
        }
    }
}
