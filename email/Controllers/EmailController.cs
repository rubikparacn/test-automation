using Microsoft.AspNetCore.Mvc;

namespace email.Controllers;

[ApiController]
[Route("[controller]")]
public class EmailController : ControllerBase
{
  

    private readonly ILogger<EmailController> _logger;

    public EmailController(ILogger<EmailController> logger)
    {
        _logger = logger;
    }

    [HttpPost]
    public dynamic Get(util.email.Instance.Request req)
    {
        util.email.Instance.Send(req);
        return new {};
    }
}
