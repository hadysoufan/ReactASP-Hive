using Application.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Post
{
    /// <summary>
    /// Provides access to post-related operations in the data store.
    /// </summary>
    public class PostAccessor : IPostAccessor
    {
        private readonly DataContext _context;
        private readonly string _imageDirectory;

        /// <summary>
        /// Initializes a new instance of the <see cref="PostAccessor"/> class.
        /// </summary>
        /// <param name="context">The data context.</param>
        /// <param name="imageDirectory">The directory for storing post images.</param>
        public PostAccessor(DataContext context, string imageDirectory)
        {
            _context = context;
            _imageDirectory = imageDirectory;
        }

        /// <inheritdoc/>
        public async Task<Domain.Entities.Post> AddPostAsync(IFormFile file, string description)
        {
            var fileName = $"{Guid.NewGuid()}_{file.FileName}";
            var filePath = Path.Combine(_imageDirectory, fileName);

            await using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            var post = new Domain.Entities.Post
            {
                Id = Guid.NewGuid(),
                Image = $"/images/{fileName}",
                Date = DateTime.UtcNow,
                Description = description
            };

            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();

            return post;
        }

        /// <inheritdoc/>
        public async Task<Domain.Entities.Post> GetPostByIdAsync(Guid id)
        {
            var post = await _context.Posts.FindAsync(id);
            return post;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Domain.Entities.Post>> GetAllPostsAsync()
        {
            return await _context.Posts.ToListAsync();
        }

        /// <inheritdoc/>
        public async Task<bool> DeletePostAsync(Guid id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return false;
            }

            _context.Posts.Remove(post);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }

        /// <inheritdoc/>
        public async Task<bool> EditPostAsync(Guid id, string newDescription)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return false;
            }

            post.Description = newDescription;
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }
    }
}
