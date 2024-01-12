namespace Domain.Entities
{
    /// <summary>
    /// Represents a product entity.
    /// </summary>
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public string Image { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public int QtyInStock { get; set; }
    }
}
