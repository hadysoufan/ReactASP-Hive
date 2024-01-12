//using Application.Core;
//using Application.Interface;
//using Domain.Entities;
//using FluentValidation;
//using MediatR;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Http.HttpResults;
//using Microsoft.EntityFrameworkCore;
//using Persistence;

//namespace Application.Posts
//{
//    /// <summary>
//    /// Represents the functionality to create a new post.
//    /// </summary>
//    public class PostCreate
//    {
//        /// <summary>
//        /// Represents the command to create a new post.
//        /// </summary>
//        public class Command : IRequest<Result<Unit>>
//        {
//            /// <summary>
//            /// Gets or sets the post to be created.
//            /// </summary>
//            public Post Post { get; set; }
//        }

//        public class CommandValidator : AbstractValidator<Command>
//        {
//            public CommandValidator() 
//            {
//                RuleFor(x => x.Post).SetValidator(new PostValidator());
//            }
//        }

//        /// <summary>
//        /// Represents the handler for creating a new post.
//        /// </summary>
//        public class Handler : IRequestHandler<Command, Result<Unit>>
//        {
//            private readonly DataContext _context;
//            private readonly IUserAccessor _userAccessor;

//            /// <summary>
//            /// Initializes a new instance of the <see cref="Handler"/> class.
//            /// </summary>
//            /// <param name="context">The data context.</param>
//            public Handler(DataContext context, IUserAccessor userAccessor)
//            {
//                _context = context;
//                _userAccessor = userAccessor;
//            }

//            /// <summary>
//            /// Handles the creation of a new post.
//            /// </summary>
//            /// <param name="request">The create post command.</param>
//            /// <param name="cancellationToken">The cancellation token.</param>
//            /// <returns>A task representing the asynchronous operation.</returns>
//            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
//            {
//                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

//                if (user == null)
//                    return Result<Unit>.Failure("User not found");

//                if (request.Url != null && request.ImageFile.Length > 0)
//                {
//                    // Handle image file upload
//                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + request.ImageFile.FileName;
//                    var imagePath = Path.Combine("wwwroot/Images", uniqueFileName); 

//                    using (var stream = new FileStream(imagePath, FileMode.Create))
//                    {
//                        await request.ImageFile.CopyToAsync(stream);
//                    }

//                    // Set the ImageFileName property of the Post entity
//                    request.Post.ImageFileName = request.ImageFile; // Assign the uploaded IFormFile
//                }

//                request.Post.OwnerName = user.DisplayName;

//                var postUser = new PostUser
//                {
//                    AppUser = user,
//                    Post = request.Post,
//                    isOwner = true
//                };

//                _context.Posts.Add(request.Post);
//                var result = await _context.SaveChangesAsync() > 0;

//                if (!result)
//                    return Result<Unit>.Failure("Failed to create post");

//                return Result<Unit>.Success(Unit.Value);
//            }
//        }
//    }
//}

