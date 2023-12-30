using System;

namespace Application.Photos
{
    /// <summary>
    /// Represents the result of a photo upload operation.
    /// </summary>
    public class PhotoUploadResult
    {
        /// <summary>
        /// Gets or sets the public ID associated with the uploaded photo. 
        /// </summary>
        public string PublicId { get; set; }

        /// <summary>
        /// Gets or sets the URL of the uploaded photo.
        /// </summary>
        public string Url { get; set; }

        public string Description { get; set; }
    }
}
