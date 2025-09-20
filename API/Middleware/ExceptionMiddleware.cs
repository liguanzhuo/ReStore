using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        //RequestDelegate is a delegate that represents the next middleware function that can process an HTTP request.
        private readonly RequestDelegate _next;

        //Logger system will record the exception details and which class print this exception.
        private readonly ILogger<ExceptionMiddleware> _logger;

        //IHostEnvironment describes the running environment of the application.
        private readonly IHostEnvironment _env;

        //This constructor used for create an ExceptionMiddleware instance. However, this instance needs to depend on three services: RequestDelegate, ILogger<ExceptionMiddleware>, and IHostEnvironment.
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _next = next;
            _logger = logger;
            _env = env;
        }

        //Freamwork requires that middlewares must contain a method named InvokeAsync, which takes an HttpContext parameter and returns a Task.
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";

                //This line tells the client this is a 500 error.
                context.Response.StatusCode = 500;

                var response = new ProblemDetails
                {
                    //This is a response body that will be sent to the client.
                    Status = 500,
                    Detail = _env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                    Title = ex.Message
                };

                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);
            }
        }
    }
}
