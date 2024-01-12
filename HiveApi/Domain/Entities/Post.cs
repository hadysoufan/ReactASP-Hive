using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    /// <summary>
    /// Represents an post entity.
    /// </summary>
    public class Post
    {
        public Guid Id { get; set; }
        [NotMapped]
        public string Url { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string OwnerName { get; set; }

    }
}
