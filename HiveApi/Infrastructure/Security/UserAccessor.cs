using Application.Interface;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace Infrastructure.Security
{
    /// <summary>
    /// Provides access to user-related information.
    /// </summary>
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserAccessor"/> class.
        /// </summary>
        /// <param name="httpContextAccessor">The HTTP context accessor.</param>
        public UserAccessor(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        /// <summary>
        /// Gets the username of the current user.
        /// </summary>
        /// <returns>The username of the current user.</returns>
        public string GetUsername()
        {
            return _httpContextAccessor.HttpContext!.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}
