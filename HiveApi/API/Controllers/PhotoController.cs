using Application.Photos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller responsible for handling photo-related operations.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoController : BaseApiController
    {
        /// <inheritdoc />
        // Post: api/photo
        [HttpPost]
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }

        /// <inheritdoc />
        // Post: api/photo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{ Id = id}));
        }

        /// <inheritdoc />
        // Post: api/photo/{id}/setMain
        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMain(string id)
        {
            return HandleResult(await Mediator.Send(new SetMain.Command { Id = id }));
        }
    }
}
