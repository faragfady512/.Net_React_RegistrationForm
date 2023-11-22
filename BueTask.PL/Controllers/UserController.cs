using AutoMapper;
using BueTask.BLL.Interfaces;
using BueTask.DAL.Entities;
using BueTask.PL.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace BueTask.PL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IMapper _mapper;

        public UserController(IGenericRepository<User> userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }


        // GET: api/User/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {

            // Get user by ID from the userRepository using GetByIdAsync
            var user = await _userRepository.GetByIdAsync(id);

            if (user == null)
            {

                return NotFound(); // Return NotFound if user is not found
            }

            return Ok(user);


        }


        // GET: api/User
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {

            // Get all users from the userRepository using GetAllAsync
            var users = await _userRepository.GetAllAsync();
            return Ok(users);

        }

        // POST: api/User
        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] UserDto userDto)
        {

            // Validate the user object
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var UsersDetails = _mapper.Map<User>(userDto); // Map UserDto to User entity

            // Add the user to the repository
            await _userRepository.AddAsync(UsersDetails);

            // Return the created user
            return Ok("user created successfully.");


        }



        // PUT: api/User/{id}
        [HttpPut("{id}")]

        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserDto userDto)
        {



            // Validate the user object
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if the user exists
            var existingUser = await _userRepository.GetByIdAsync(id);

            if (existingUser == null)
            {
                return NotFound();
            }

            // Map the data from UserDto to existingUser using AutoMapper
            _mapper.Map(userDto, existingUser);

            // Update the existing user
            await _userRepository.UpdateAsync(existingUser);

            // Return the updated user
            return Ok(existingUser);






        }







    }
}
