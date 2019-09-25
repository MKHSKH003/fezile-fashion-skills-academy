using FezileFashionSkillsAcademy.Services;
using Microsoft.AspNetCore.Mvc;

namespace FezileFashionSkillsAcademy.Controllers
{
    [Route("api/applications")]
    [ApiController]
    public class ApplicationsController : ControllerBase
    {
        private readonly IApplicationsService _applicationService;
        public ApplicationsController(IApplicationsService applicationService)
        {
            _applicationService = applicationService;
        }

        [HttpPost]
        public void ApplicationForAdmission(Models.Application Application)
        {
            _applicationService.ApplicationForAdmission(Application);
        }
    }
}
