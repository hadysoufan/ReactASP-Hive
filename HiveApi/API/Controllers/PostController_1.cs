using Microsoft.AspNetCore.Mvc;
using Domain.Entities;
using Application.Interface;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostAccessor _postService;

        public PostController(IPostAccessor postService)
        {
            _postService = postService;
        }

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

        // GET endpoint to retrieve a post by ID (if needed)
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetAllPosts()
        {
            var posts = await _postService.GetAllPostsAsync();
            return Ok(posts);
        }

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
