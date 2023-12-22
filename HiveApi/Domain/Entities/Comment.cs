namespace Domain.Entities
{
    /// <summary>
    /// Represents a comment entity.
    /// </summary>
    public class Comment
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public AppUser Author { get; set; }
        public Activity Activity { get; set; }
        public Guid ActivityId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
