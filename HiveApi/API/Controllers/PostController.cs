//using Application.Activities;
//using Application.Posts;
//using Domain.Entities;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using System.Diagnostics;

//namespace API.Controllers
//{
//    [AllowAnonymous]
//    [ApiController]
//    [Route("api/[controller]")]
//    public class PostController : BaseApiController
//    {
//        [HttpGet]
//        public async Task<IActionResult> GetPosts()
//        {
//            return HandleResult(await Mediator.Send(new PostList.Query()));
//        }

//        [HttpPost]
//        public async Task<IActionResult> CreatePost(Post post)
//        {
//            return HandleResult(await Mediator.Send(new PostCreate.Command { Post = post }));
//        }

//        [HttpDelete("{id}")]
//        public async Task<IActionResult> DeletePost(Guid id)
//        {
//            return HandleResult(await Mediator.Send(new PostDelete.Command { Id = id }));
//        }
//    }
//}
