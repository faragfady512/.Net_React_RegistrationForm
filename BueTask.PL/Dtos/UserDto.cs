
using Ganss.Xss;
using System.ComponentModel.DataAnnotations;

namespace BueTask.PL.Dtos
{
    public class UserDto
    {

        private string _name;
        private string _email;
        private string _phoneNumber;


        // Stores the user's name.
        [Required(ErrorMessage = "Name is required.")]
        //[RegularExpression(@"^[A-Z][a-z]*$", ErrorMessage = "First name must start with an uppercase letter.")]
        public string Name
        {
            get => _name;
            set => _name = new HtmlSanitizer().Sanitize(value);
        }

        // Stores the user's Email.
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        [RegularExpression(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", ErrorMessage = "Invalid email format.")]
        public string Email
        {
            get => _email;
            set => _email = new HtmlSanitizer().Sanitize(value); //using HtmlSantizer Packge to validate user to input html or any tags 
        }


        // Stores the user's phone number.
        [Required(ErrorMessage = "Phone number is required.")]
        [Phone(ErrorMessage = "Invalid phone number format.")]
        public string PhoneNumber
        {
            get => _phoneNumber;
            set => _phoneNumber = new HtmlSanitizer().Sanitize(value);
        }

        // Stores the user's age.
        [Required(ErrorMessage = "Age is required.")]
        [Range(16, 70)]
        public int Age { get; set; }
    }
}
