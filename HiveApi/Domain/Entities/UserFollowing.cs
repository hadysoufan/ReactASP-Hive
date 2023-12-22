namespace Domain.Entities
{
    /// <summary>
    /// Represents a user following relationship.
    /// </summary>
    public class UserFollowing
    {
        public string ObserverId { get; set; }
        public AppUser Observer { get; set; }
        public string TargetId { get; set; }
        public AppUser Target { get; set; }
    }
}
