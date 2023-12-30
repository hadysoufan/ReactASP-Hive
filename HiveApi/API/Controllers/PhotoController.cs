using Application.Photos;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    /// <summary>
    /// Controller responsible for handling photo-related operations.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoController : BaseApiController
    {
        private readonly DataContext _context;

        public PhotoController(DataContext context)
        {
            _context = context;
        }

        /// <inheritdoc />
        // Post: api/photo
        [HttpPost("create-photo")]
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }

        [HttpGet]
        public async Task<ActionResult<List<Photo>>> GetPhotos()
        {
            return await _context.Photos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Photo>> GetPhoto(string id)
        {
            var photo = await _context.Photos.FindAsync(id);

            if (photo is null)
            {
                return NotFound();
            }

            return photo;
        }


        /// <inheritdoc />
        // Post: api/photo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{ Id = id}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPhoto(string id, Photo photo)
        {
            photo.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Photo = photo }));
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
