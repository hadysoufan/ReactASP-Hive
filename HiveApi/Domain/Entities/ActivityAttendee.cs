using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    /// <summary>
    /// Represents an attendee of an activity.
    /// </summary>
    public class ActivityAttendee
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid ActivityId { get; set; }
        public Activity Activity { get; set; }
        public bool isHost { get; set; }    
    }
}
