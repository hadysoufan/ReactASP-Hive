using Application.Activities;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for managing activities.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ActivitiesController : BaseApiController
    {

        /// <inheritdoc />
        // GET: api/activities
        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        /// <inheritdoc />
        // GET: api/activities/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id)
        {
           return HandleResult(await Mediator.Send(new Details.Query { Id = id }));

        }

        /// <inheritdoc />
        // Post: api/activities
        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));
        }

        /// <inheritdoc />
        // Edit: api/activities/{id}
        //[Authorize(Policy = "IsActivityHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity })); 
        }

        /// <inheritdoc />
        // Delete: api/activities/{id}
        //[Authorize(Policy = "IsActivityHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        /// <inheritdoc />
        // Delete: api/activities/{id}/attend
        [HttpPost("{id}/attend")]
        public async Task<IActionResult> Attend(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateAttendance.Command { Id = id }));
        }
    }
}
