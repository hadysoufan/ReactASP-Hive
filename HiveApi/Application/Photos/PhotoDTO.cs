using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Photos
{
    public class PhotoDTO
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string Owner { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
    }
}
