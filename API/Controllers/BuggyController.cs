using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        //When the client sends get request to http://localhost:5000/api/buggy/not-found, it will return a 404 Not Found response.
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        //When the client sends get request to http://localhost:5000/api/buggy/server-error, it will throw an exception, resulting in a 500 Internal Server Error response.
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }

        //When the client sends get request to http://localhost:5000/api/buggy/bad-request, it will return a 400 Bad Request response with a custom message.
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "This is a bad request"});
        }

        //When the client sends get request to http://localhost:5000/api/buggy/unauthorized, it will return a 401 Unauthorized response.
        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        /*
         * 1. ModelState is a property of the ControllerBase class that if record the request data sent by the client has any validation errors.
         * 2. Model Binding is the process of mapping data from HTTP requests to action method parameters. 
         * 3. Validation: When the binding process is complete, the framework automatically validates the data against any Data Annotation applied to the model properties. Like [EmailAddress], when I use it in my DTO(Data transfer object) class. The framework checks if the data meets the email format. If it doesn't, a validation error is added to the ModelState.
         * 4. ValidationProblem(): Packages the errors in the ModelState into json format and returns it to the client with a 400 Bad Request status code.
         */
        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the second error");
            return ValidationProblem();
        }
    }
}
