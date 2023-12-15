namespace API.DTOs
{
    /// <summary>
    /// Data transfer object for user information.
    /// </summary>
    public class UserDTO
    {
        /// <summary>
        /// Gets or sets the display name of the user.
        /// </summary>
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or sets the authentication token associated with the user.
        /// </summary>
        public string Token { get; set; }

        /// <summary>
        /// Gets or sets the image associated with the user.
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// Gets or sets the username of the user.
        /// </summary>
        public string Username { get; set; }
    }
}
