//using Application.Interface;
//using Domain.Entities;
//using Microsoft.AspNetCore.Http;
//using Microsoft.EntityFrameworkCore;
//using Persistence;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Infrastructure.Post
//{
//    /// <summary>
//    /// Provides access to post-related operations in the data store.
//    /// </summary>
//    public class PostAccessor : IPostAccessor
//    {
//        private readonly DataContext _context;
//        private readonly string _imageDirectory;

//        /// <summary>
//        /// Initializes a new instance of the <see cref="PostAccessor"/> class.
//        /// </summary>
//        /// <param name="context">The data context.</param>
//        /// <param name="imageDirectory">The directory for storing post images.</param>
//        public PostAccessor(DataContext context, string imageDirectory)
//        {
//            _context = context;
//            _imageDirectory = imageDirectory;
//        }

//        /// <inheritdoc/>
//        public async Task<Domain.Entities.Post> CreatePostAsync(Domain.Entities.Post post, string userId, bool isOwner)
//        {
//            var postUser = new PostUser
//            {
//                AppUserId = userId,
//                Post = post,
//                isOwner = isOwner
//            };

//            _context.PostUsers.Add(postUser);
//            await _context.SaveChangesAsync();

//            return post;
//        }

//        private bool IsImageFileExtension(string extension)
//        {
//            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".mp4" };
//            return allowedExtensions.Contains(extension.ToLowerInvariant());
//        }

//        /// <inheritdoc/>
//        public async Task<Domain.Entities.Post> GetPostByIdAsync(Guid id)
//        {
//            var post = await _context.Posts.FindAsync(id);
//            return post;
//        }

//        /// <inheritdoc/>
//        public async Task<IEnumerable<Domain.Entities.Post>> GetAllPostsAsync()
//        {
//            return await _context.Posts.ToListAsync();
//        }

//        /// <inheritdoc/>
//        public async Task<bool> DeletePostAsync(Guid id)
//        {
//            var post = await _context.Posts.FindAsync(id);
//            if (post == null)
//            {
//                return false;
//            }

//            _context.Posts.Remove(post);
//            var result = await _context.SaveChangesAsync();
//            return result > 0;
//        }

//        /// <inheritdoc/>
//        public async Task<bool> EditPostAsync(Guid id, string newDescription)
//        {
//            var post = await _context.Posts.FindAsync(id);
//            if (post == null)
//            {
//                return false;
//            }

//            post.Description = newDescription;
//            var result = await _context.SaveChangesAsync();
//            return result > 0;
//        }
//    }
//}
