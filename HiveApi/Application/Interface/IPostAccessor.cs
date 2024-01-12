using Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Interface
{
    /// <summary>
    /// Represents an interface for accessing and managing posts.
    /// </summary>
    public interface IPostAccessor
    {
        /// <summary>
        /// Adds a new post with an attached file and a description.
        /// </summary>
        /// <param name="file">The file to attach to the post.</param>
        /// <param name="description">The description of the post.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the newly added post.</returns>
        Task<Post> CreatePostAsync(Post post, string userId, bool isOwner);

        /// <summary>
        /// Retrieves a post by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the post to retrieve.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the retrieved post.</returns>
        Task<Post> GetPostByIdAsync(Guid id);

        /// <summary>
        /// Retrieves all posts.
        /// </summary>
        /// <returns>A task that represents the asynchronous operation. The task result contains a collection of all posts.</returns>
        Task<IEnumerable<Post>> GetAllPostsAsync();

        /// <summary>
        /// Deletes a post by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the post to delete.</param>
        /// <returns>A task that represents the asynchronous operation. True if the post was successfully deleted; otherwise, false.</returns>
        Task<bool> DeletePostAsync(Guid id);

        /// <summary>
        /// Edits the description of a post.
        /// </summary>
        /// <param name="id">The unique identifier of the post to edit.</param>
        /// <param name="newDescription">The new description for the post.</param>
        /// <returns>A task that represents the asynchronous operation. True if the post was successfully edited; otherwise, false.</returns>
        Task<bool> EditPostAsync(Guid id, string newDescription);
    }
}
