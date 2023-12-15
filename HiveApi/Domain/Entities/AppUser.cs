using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    /// <summary>
    /// Represents an application user.
    /// </summary>
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }

        /// <summary>
        /// Gets or sets the collection of activities associated with the user.
        /// </summary>
        public ICollection<ActivityAttendee> Activities { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
