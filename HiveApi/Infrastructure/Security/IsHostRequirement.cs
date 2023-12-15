using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Security.Claims;

namespace Infrastructure.Security
{
    /// <summary>
    /// Represents an authorization requirement to check if the user is the host of an activity.
    /// </summary>
    public class IsHostRequirement : IAuthorizationRequirement
    {
    }

    /// <summary>
    /// Handles the authorization requirement to check if the user is the host of an activity.
    /// </summary>
    public class IsHostRequirementHandler : AuthorizationHandler<IsHostRequirement>
    {
        private readonly DataContext _dbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        /// <summary>
        /// Initializes a new instance of the <see cref="IsHostRequirementHandler"/> class.
        /// </summary>
        /// <param name="dbContext">The data context.</param>
        /// <param name="httpContextAccessor">The HTTP context accessor.</param>
        public IsHostRequirementHandler(DataContext dbContext, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = dbContext;
            _httpContextAccessor = httpContextAccessor;
        }

        /// <summary>
        /// Handles the authorization requirement asynchronously.
        /// </summary>
        /// <param name="context">The authorization context.</param>
        /// <param name="requirement">The authorization requirement.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsHostRequirement requirement)
        {
            var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId is null) return Task.CompletedTask;

            var activityId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues
                .SingleOrDefault(x => x.Key == "id").Value?.ToString());

            var attendee = _dbContext.ActivityAttendees
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.AppUserId == userId && x.ActivityId == activityId)
                .Result;

            if (attendee is null) return Task.CompletedTask;

            if (attendee.isHost) context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}
