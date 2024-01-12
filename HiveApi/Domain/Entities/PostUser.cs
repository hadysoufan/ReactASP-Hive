using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class PostUser
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public Guid PostId { get; set; }

        public Post Post { get; set; }

        public bool isOwner { get; set; }
    }
}
