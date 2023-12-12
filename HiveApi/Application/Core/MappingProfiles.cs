using AutoMapper;
using Domain.Entities;

namespace Application.Core
{
    /// <summary>
    /// AutoMapper profiles for mapping between entities and DTOs.
    /// </summary>
    public class MappingProfiles : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MappingProfiles"/> class.
        /// </summary>
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
        }
    }
}
