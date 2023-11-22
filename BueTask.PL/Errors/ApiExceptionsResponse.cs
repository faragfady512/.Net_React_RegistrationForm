namespace BueTask.PL.Errors
{

    // This class extends ApiErrorResponse to include additional details in case of exceptions
    public class ApiExceptionsResponse : ApiErrorResponse
    {

        //  details about the exception
        public string Details { get; set; }


        // Ctor to initialize ApiExceptionsResponse with status code, message, and details
        public ApiExceptionsResponse(int StatusCode, string message = null, string details = null) : base(StatusCode, message)
        {
            Details = details;
        }
    }
}
