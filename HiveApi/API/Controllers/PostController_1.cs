using Application.Interface;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for managing posts in the API.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostAccessor _postService;

        /// <summary>
        /// Initializes a new instance of the <see cref="PostController"/> class.
        /// </summary>
        /// <param name="postService">The post accessor service.</param>
        public PostController(IPostAccessor postService)
        {
            _postService = postService;
        }

        /// <inheritdoc/>
        /// Post: api/post
        [HttpPost]
        public async Task<ActionResult<Post>> AddPost([FromForm] IFormFile file, [FromForm] string description)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("File is required.");
            }

            var post = await _postService.AddPostAsync(file, description);

            if (post == null)
            {
                return BadRequest("Error occurred while adding the post.");
            }

            // Assuming the API returns the location of the newly created resource in the response header
            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
        }

        /// <inheritdoc/>
        /// Get: api/post/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(Guid id)
        {
            var post = await _postService.GetPostByIdAsync(id); // Assuming this method exists in your PostService

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        /// <inheritdoc/>
        /// Get: api/post
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetAllPosts()
        {
            var posts = await _postService.GetAllPostsAsync();
            return Ok(posts);
        }

        /// <inheritdoc/>
        /// Delete: api/post/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            var result = await _postService.DeletePostAsync(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPost(Guid id, [FromBody] string newDescription)
        {
            var result = await _postService.EditPostAsync(id, newDescription);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
