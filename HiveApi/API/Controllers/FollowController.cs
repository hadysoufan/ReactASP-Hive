using Application.Followers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for managing followers.
    /// </summary>
    public class FollowController : BaseApiController
    {
        [HttpPost("{username}")]
        public async Task<IActionResult> Follow(string username)
        {
            return HandleResult(await Mediator.Send(new FollowToggle.Command { TargetUsername = username }));
        }

        /// <inheritdoc />
        [HttpGet("{username}")]
        public async Task<IActionResult> GetFollowing(string username, string predicate)
        {
            return HandleResult(await Mediator.Send(new FollowersList.Query { Username = username, Predicate = predicate }));
        }
    }
}
