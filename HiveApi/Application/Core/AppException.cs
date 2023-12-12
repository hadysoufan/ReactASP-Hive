namespace Application.Core
{
    /// <summary>
    /// Represents an application-specific exception.
    /// </summary>
    public class AppException
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AppException"/> class with the specified status code, message, and optional details.
        /// </summary>
        /// <param name="statusCode">The HTTP status code associated with the exception.</param>
        /// <param name="message">A brief message describing the exception.</param>
        /// <param name="details">Additional details or context about the exception (optional).</param>
        public AppException(int statusCode, string message, string details = null)
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }

        /// <summary>
        /// Gets or sets the HTTP status code associated with the exception.
        /// </summary>
        public int StatusCode { get; set; }

        /// <summary>
        /// Gets or sets a brief message describing the exception.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// Gets or sets additional details or context about the exception (optional).
        /// </summary>
        public string Details { get; set; }
    }
}
