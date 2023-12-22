using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any() && !context.Activities.Any() && !context.Posts.Any() && !context.Products.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Hadi Soufan", UserName = "hadysoufan", Email = "hady@gmail.com"},
                    new AppUser{DisplayName = "Melia Soufan", UserName = "melia", Email = "melia@gmail.com"},
                    new AppUser{DisplayName = "Scienna Soufan", UserName = "scienna", Email = "scienna@gmail.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Test1234$");
                };

                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Past Activity 1",
                        Date = DateTime.UtcNow.AddMonths(-2),
                        Description = "Activity 2 months ago",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                isHost = true
                            }
                        }
                    },
                    new Activity
                    {
                        Title = "Past Activity 2",
                        Date = DateTime.UtcNow.AddMonths(-1),
                        Description = "Activity 1 month ago",
                        Category = "culture",
                        City = "Paris",
                        Venue = "The Louvre",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 1",
                        Date = DateTime.UtcNow.AddMonths(1),
                        Description = "Activity 1 month in future",
                        Category = "music",
                        City = "London",
                        Venue = "Wembly Stadium",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 2",
                        Date = DateTime.UtcNow.AddMonths(2),
                        Description = "Activity 2 months in future",
                        Category = "food",
                        City = "London",
                        Venue = "Jamies Italian",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 3",
                        Date = DateTime.UtcNow.AddMonths(3),
                        Description = "Activity 3 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 4",
                        Date = DateTime.UtcNow.AddMonths(4),
                        Description = "Activity 4 months in future",
                        Category = "culture",
                        City = "London",
                        Venue = "British Museum",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = true
                            }
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 5",
                        Date = DateTime.UtcNow.AddMonths(5),
                        Description = "Activity 5 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Punch and Judy",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 6",
                        Date = DateTime.UtcNow.AddMonths(6),
                        Description = "Activity 6 months in future",
                        Category = "music",
                        City = "London",
                        Venue = "O2 Arena",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 7",
                        Date = DateTime.UtcNow.AddMonths(7),
                        Description = "Activity 7 months in future",
                        Category = "travel",
                        City = "Berlin",
                        Venue = "All",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                isHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 8",
                        Date = DateTime.UtcNow.AddMonths(8),
                        Description = "Activity 8 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                isHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                isHost = false
                            },
                        }
                    }
                }; 

                var posts = new List<Post>
            {
                new Post
                {
                    Image = null,
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Post 2 months ago"
                },
                new Post
                {
                    Image = null,
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Post 1 month ago"
                },
                new Post
                {
                    Image = null,
                    Date = DateTime.UtcNow,
                    Description = "Current Post"
                },
                new Post
                {
                    Image = null,
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Future Post 1 month later"
                },
                new Post
                {
                    Image = null,
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Future Post 2 months later"
                }
            };

                var products = new List<Product>
            {
                new Product
                {
                    Name = "Product 1",
                    Description = "Description for Product 1",
                    Price = 50,
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHFZjpPT1zlQDp-GmgdAwVByzVCeBxfkqFg&usqp=CAU",
                    Type = "Type 1",
                    Brand = "Brand 1",
                    QtyInStock = 100
                },
                new Product
                {
                    Name = "Product 2",
                    Description = "Description for Product 2",
                    Price = 40,
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHFZjpPT1zlQDp-GmgdAwVByzVCeBxfkqFg&usqp=CAU",
                    Type = "Type 2",
                    Brand = "Brand 2",
                    QtyInStock = 56
                },
                new Product
                {
                    Name = "Product 3",
                    Description = "Description for Product 3",
                    Price = 50,
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHFZjpPT1zlQDp-GmgdAwVByzVCeBxfkqFg&usqp=CAU",
                    Type = "Type 3",
                    Brand = "Brand 3",
                    QtyInStock = 100
                },
                new Product
                {
                    Name = "Product 4",
                    Description = "Description for Product 4",
                    Price = 50,
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHFZjpPT1zlQDp-GmgdAwVByzVCeBxfkqFg&usqp=CAU",
                    Type = "Type 4",
                    Brand = "Brand 4",
                    QtyInStock = 10
                },
                new Product
                {
                    Name = "Product 5",
                    Description = "Description for Product 5",
                    Price = 50,
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHFZjpPT1zlQDp-GmgdAwVByzVCeBxfkqFg&usqp=CAU",
                    Type = "Type 5",
                    Brand = "Brand 5",
                    QtyInStock = 100
                },
                new Product
                {
                    Name = "Product 6",
                    Description = "Description for Product 6",
                    Price = 50,
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHFZjpPT1zlQDp-GmgdAwVByzVCeBxfkqFg&usqp=CAU",
                    Type = "Type 6",
                    Brand = "Brand 6",
                    QtyInStock = 100
                }

            };

                await context.Activities.AddRangeAsync(activities);
                await context.Posts.AddRangeAsync(posts);
                await context.Products.AddRangeAsync(products);
                await context.SaveChangesAsync();
            };

            

        }
    }
}
