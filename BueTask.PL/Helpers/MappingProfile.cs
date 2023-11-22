using AutoMapper;
using BueTask.DAL.Entities;
using BueTask.PL.Dtos;

namespace BueTask.PL.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
           
            // This line defines a mapping from UserDto to User
            CreateMap<UserDto, User>();


        }
    }
}
