using FezileFashionSkillsAcademy.Services;
using Microsoft.AspNetCore.Mvc;

namespace FezileFashionSkillsAcademy.Controllers
{
    [Route("api/applications")]
    [ApiController]
    public class ApplicationsController : ControllerBase
    {
        private readonly IApplicationsService _applicationService;
        private readonly IEmailsService _emailService;

        public ApplicationsController(IApplicationsService applicationService, IEmailsService emailService)
        {
            _applicationService = applicationService;
            _emailService = emailService;
        }

        [HttpPost]
        public void ApplicationForAdmission(Models.Application application)
        {
            //_applicationService.ApplicationForAdmission(application);
            _emailService.sendApplicationDetails(application);
        }
    }
}
