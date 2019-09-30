using FezileFashionSkillsAcademy.Services;
using Microsoft.AspNetCore.Mvc;

namespace FezileFashionSkillsAcademy.Controllers
{
    [Route("api/emails")]
    [ApiController]
    public class EmailsController : ControllerBase
    {
        private readonly IEmailsService _emailService;

        public EmailsController(IEmailsService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public string SendEmail(Models.Email email)
        {
            return _emailService.SendEmail(email);
        }
    }
}
