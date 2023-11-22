using System.Collections.Generic;

namespace BueTask.PL.Errors
{

    // This class extends ApiErrorResponse to handle validation errors 
    public class ValidationErrorsMessagecs : ApiErrorResponse
    {

        // Collection of validation error messages 
        public IEnumerable<string> Errors { get; set; }



        // Default constructor initializes the class with a 400 status code (Bad Request)
        public ValidationErrorsMessagecs() : base(400)
        {


        }
    }
}
