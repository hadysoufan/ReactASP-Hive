using Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace Persistence
{
    /// <summary>
    /// Represents the data context for interacting with the database.
    /// </summary>
    public class DataContext : IdentityDbContext<AppUser>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataContext"/> class with the specified options.
        /// </summary>
        /// <param name="options">The options for configuring the data context.</param>
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        /// <summary>
        /// Gets or sets the DbSet for activities.
        /// </summary>
        public DbSet<Activity> Activities { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for activity attendees.
        /// </summary>
        public DbSet<ActivityAttendee> ActivityAttendees { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for photos.
        /// </summary>
        public DbSet<Photo> Photos { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for posts.
        /// </summary>
        public DbSet<Post> Posts { get; set; }

        public DbSet<PostUser> PostUsers { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for products.
        /// </summary>
        public DbSet<Product> Products { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for comments.
        /// </summary>
        public DbSet<Comment> Comments { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for user following.
        /// </summary>
        public DbSet<UserFollowing> UserFollowings { get; set; }

        /// <summary>
        /// Configures the relationships and keys for the entities.
        /// </summary>
        /// <param name="builder">The model builder.</param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configure the primary key for the ActivityAttendee entity
            builder.Entity<ActivityAttendee>(x => x.HasKey(aa => new { aa.AppUserId, aa.ActivityId }));

            // Configure the relationship between ActivityAttendee and AppUser
            builder.Entity<ActivityAttendee>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.Activities)
                .HasForeignKey(aa => aa.AppUserId);

            // Configure the relationship between ActivityAttendee and Activity
            builder.Entity<ActivityAttendee>()
                .HasOne(u => u.Activity)
                .WithMany(a => a.Attendees)
                .HasForeignKey(aa => aa.ActivityId);

            // Configure the relationship between Comment and Activity
            builder.Entity<Comment>()
                .HasOne(c => c.Activity)
                .WithMany(a => a.Comments)
                .HasForeignKey(c => c.ActivityId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure the relationship between user and following
            builder.Entity<UserFollowing>(b =>
            {
                b.HasKey(k => new { k.ObserverId, k.TargetId });

                b.HasOne(o => o.Observer)
                .WithMany(f => f.Followings)
                .HasForeignKey(o => o.ObserverId)
                .OnDelete(DeleteBehavior.Cascade);

                b.HasOne(o => o.Target)
                .WithMany(f => f.Followers)
                .HasForeignKey(o => o.TargetId)
                .OnDelete(DeleteBehavior.Restrict);
            });

            builder.Entity<PostUser>()
                        .HasKey(pu => new { pu.AppUserId, pu.PostId });

            // Configuring the relationship between Post and PostUser
            builder.Entity<PostUser>()
            .HasOne(pu => pu.Post)
            .WithMany()
            .HasForeignKey(pu => pu.PostId);

            // Configuring the relationship between AppUser and PostUser
            builder.Entity<PostUser>()
            .HasOne(pu => pu.AppUser)
            .WithMany(u => u.Posts)
            .HasForeignKey(pu => pu.AppUserId);
        }
    }
}
