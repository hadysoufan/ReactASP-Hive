namespace Domain.Entities
{
    /// <summary>
    /// Represents an post entity.
    /// </summary>
    public class Post
    {
        public Guid Id { get; set; }
        public string Image { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        
    }
}
