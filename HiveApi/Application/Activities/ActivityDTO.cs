using Application.Profiles;

namespace Application.Activities
{
    /// <summary>
    /// Data transfer object for activity information.
    /// </summary>
    public class ActivityDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public string HostUsername { get; set; }
        public bool IsCancelled { get; set; }

        /// <summary>
        /// Gets or sets the collection of profiles representing attendees of the activity.
        /// </summary>
        public ICollection<AttendeeDTO> Attendees { get; set; }
    }
}
