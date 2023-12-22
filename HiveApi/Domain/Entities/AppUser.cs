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

        /// <summary>
        /// Gets or sets the collection of photos associated with the user.
        /// </summary>
        public ICollection<Photo> Photos { get; set; }

        /// <summary>
        /// Gets or sets the collection of posts associated with the user.
        /// </summary>
        public ICollection<Post> Posts { get; set; }

        /// <summary>
        /// Gets or sets the collection of whom the user is following.
        /// </summary>
        public ICollection<UserFollowing> Followings{ get; set; }

        /// <summary>
        /// Gets or sets the collection of whom is following the user.
        /// </summary>
        public ICollection<UserFollowing> Followers { get; set; }
    }
}
