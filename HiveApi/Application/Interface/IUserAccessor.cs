namespace Application.Interface
{
    /// <summary>
    /// Interface for accessing user-related information.
    /// </summary>
    public interface IUserAccessor
    {
        /// <summary>
        /// Gets the username of the current user.
        /// </summary>
        /// <returns>The username of the current user.</returns>
        string GetUsername();
    }
}
