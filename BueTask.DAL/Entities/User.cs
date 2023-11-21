using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BueTask.DAL.Entities
{
    public class User
    {
        // this property is the primary key in the database.
        [Key]
        public int Id { get; set; }


        // Stores the user's name.
        [Required]
        public string Name { get; set; }

        // Stores the user's Email.
        [Required]
        public string Email { get; set; }

        // Stores the user's phone number.
        [Required]
        public string PhoneNumber { get; set; }


        // Stores the user's age.
        [Required]
        public int Age { get; set; }    


    }
}
