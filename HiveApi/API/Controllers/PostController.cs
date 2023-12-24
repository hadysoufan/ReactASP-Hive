using Application.Posts;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for managing posts.
    /// </summary>
    
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : BaseApiController
    {

        /// <inheritdoc />
        // GET: api/post
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            return HandleResult(await Mediator.Send(new PostList.Query()));
        }

        /// <inheritdoc />
        // GET: api/post/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(Guid id)
        {
            var result = await Mediator.Send(new PostDetails.Query { Id = id });

            return HandleResult(result);
        }

        /// <inheritdoc />
        // Post: api/post
        [HttpPost]
        public async Task<ActionResult> CreatePost(Post post)
        {
            return HandleResult(await Mediator.Send(new PostCreate.Command { Post = post }));
        }

        /// <inheritdoc />
        // Put: api/post/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> EditPost(Guid id, Post post)
        {
            post.Id = id;
            return HandleResult(await Mediator.Send(new PostEdit.Command { Post = post }));   
        }

        /// <inheritdoc />
        // Delete: api/post/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult>DeletePost(Guid id)
        {
            return HandleResult(await Mediator.Send(new PostDelete.Command { Id = id }));
        }



    }
}
