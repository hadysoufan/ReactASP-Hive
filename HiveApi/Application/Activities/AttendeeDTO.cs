namespace Application.Activities
{
    public  class AttendeeDTO
    {
        /// <summary>
        /// Represents data transfer object (DTO) for attendees of an activity.
        /// </summary>
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Bio { get; set; }
        public string Image { get; set; }
    }
}
