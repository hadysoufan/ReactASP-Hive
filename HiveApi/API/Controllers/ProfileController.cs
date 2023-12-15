using Application.Profiles;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller responsible for handling user profile-related operations.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : BaseApiController
    {
        /// <inheritdoc />
        // Get: api/profile/{username}
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Username = username }));
        }
    }
}
