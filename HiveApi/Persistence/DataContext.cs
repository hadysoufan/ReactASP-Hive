using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Persistence
{
    /// <summary>
    /// Represents the data context for interacting with the database.
    /// </summary>
    public class DataContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataContext"/> class with the specified options.
        /// </summary>
        /// <param name="options">The options for configuring the data context.</param>
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
    }
}
