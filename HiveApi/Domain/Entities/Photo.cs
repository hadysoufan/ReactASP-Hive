namespace Domain.Entities
{
    /// <summary>
    /// Represents an photo entity.
    /// </summary>
    public class Photo
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
    }
}
