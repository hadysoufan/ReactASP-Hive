namespace Infrastructure.Photos
{
    /// <summary>
    /// Represents the configuration settings for connecting to Cloudinary.
    /// </summary>
    public class CloudinarySettings
    {
        public string CloudName { get; set; }
        public string Apikey { get; set; }
        public string ApiSecret { get; set; }       
    }
}
