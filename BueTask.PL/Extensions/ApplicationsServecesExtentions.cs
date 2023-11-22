using BueTask.BLL.Interfaces;
using BueTask.BLL.Repositories;
using BueTask.PL.Errors;
using BueTask.PL.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace BueTask.PL.Extensions
{
    // Extension methods for adding application services to IServiceCollection
    public static class ApplicationsServecesExtentions
    {

        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {


            // Add the generic repository and its implementation

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));



            services.AddCors(); // Enable CORS





            services.AddAutoMapper(typeof(MappingProfile)); //  AutoMapper for mapping Dto to Entities


            // Configure API behavior options to handle invalid model states and return detailed error messages
            services.Configure<ApiBehaviorOptions>(Options =>
            {
                Options.InvalidModelStateResponseFactory = (actionContext) =>
                {
                    var errors = actionContext.ModelState.Where(M => M.Value.Errors.Count > 0)
                                                         .SelectMany(M => M.Value.Errors)
                                                          .Select(E => E.ErrorMessage)
                                                          .ToArray();


                    // Create a ValidationErrorsMessagecs object with the extracted errors
                    var ValidationErrorsMessages = new ValidationErrorsMessagecs()
                    {
                        Errors = errors


                    };

                    return new BadRequestObjectResult(ValidationErrorsMessages);
                };
            });

            return services;

        }
    }
}
