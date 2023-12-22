namespace Domain.Entities
{
    /// <summary>
    /// Represents an activity entity.
    /// </summary>
    public class Activity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public bool IsCancelled { get; set; }

        /// <summary>
        /// Gets or sets the collection of attendees for the activity.
        /// </summary>
        public ICollection<ActivityAttendee> Attendees { get; set; } = new List<ActivityAttendee>();

        /// <summary>
        /// Gets or sets the collection of comments for the activity.
        /// </summary>
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
