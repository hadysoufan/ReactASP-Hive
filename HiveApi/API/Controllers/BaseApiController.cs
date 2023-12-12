using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Base API controller providing common functionality for derived controllers.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        /// <summary>
        /// Gets the Mediator service from the request services.
        /// </summary>
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        /// <summary>
        /// Handles the result of a MediatR request and returns an appropriate ActionResult.
        /// </summary>
        /// <typeparam name="T">The type of the result value (Any model can be passed here).</typeparam>
        /// <param name="result">The result of the MediatR request.</param>
        /// <returns>An ActionResult based on the result.</returns>
        protected ActionResult HandleResult<T>(Result<T> result)
        {
            if (result is null) return NotFound();

            if (result.IsSuccess && result.Value != null)
                return Ok(result.Value);

            if (result.IsSuccess && result.Value is null)
                return NotFound();

            return BadRequest(result.Error);
        }
    }
}
