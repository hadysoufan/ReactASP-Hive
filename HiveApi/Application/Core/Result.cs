namespace Application.Core
{
    /// <summary>
    /// Represents a result of an operation that can be either successful or failed.
    /// </summary>
    /// <typeparam name="T">The type of the result value.</typeparam>
    public class Result<T>
    {
        /// <summary>
        /// Gets or sets a value indicating whether the operation was successful.
        /// </summary>
        public bool IsSuccess { get; set; }

        /// <summary>
        /// Gets or sets the result value when the operation is successful.
        /// </summary>
        public T Value { get; set; }

        /// <summary>
        /// Gets or sets the error message when the operation fails.
        /// </summary>
        public string Error { get; set; }

        /// <summary>
        /// Creates a successful result with a specified value.
        /// </summary>
        /// <param name="value">The value of the successful result.</param>
        /// <returns>A successful result with the specified value.</returns>
        public static Result<T> Success(T value) => new Result<T> { IsSuccess = true, Value = value };

        /// <summary>
        /// Creates a failed result with a specified error message.
        /// </summary>
        /// <param name="error">The error message of the failed result.</param>
        /// <returns>A failed result with the specified error message.</returns>
        public static Result<T> Failure(string error) => new Result<T> { IsSuccess = false, Error = error };
    }
}
