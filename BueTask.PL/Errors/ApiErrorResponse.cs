namespace BueTask.PL.Errors
{
    // This class represents the structure of an API error response
    public class ApiErrorResponse
    {
        // The HTTP status code of the error
        public int StatusCode { get; set; }


        // The error message associated with the status code
        public string Message { get; set; }


        // Ctor to initialize the ApiErrorResponse with status code and optional message
        public ApiErrorResponse(int StatusCode, string message = null)
        {
            this.Message = message ?? GetDefaultMessageForStatusCode(StatusCode);

            this.StatusCode = StatusCode;

        }

        // Private method to get a default message based on the provided status code
        private string GetDefaultMessageForStatusCode(int statusCode)
        {

            // Switch case to return a error message 

            return statusCode switch
            {
                400 => "A bad request , you have made ",
                401 => "Authorized, you are not ",
                404 => "Resorce Not found",
                500 => "internal server Error "
            };


        }

    }
}
