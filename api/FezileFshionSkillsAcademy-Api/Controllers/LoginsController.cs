using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using FezileFashionSkillsAcademy.Services;
using Microsoft.AspNetCore.Mvc;

namespace FezileFashionSkillsAcademy.Controllers
{
    [Route("api/logins")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private readonly ILoginsService _loginsService;
        public LoginsController(ILoginsService loginsService)
        {
            _loginsService = loginsService;
        }

        [HttpPost("authenticate-user")]
        public ActionResult<Models.User> Authentication(Models.User User)
        {
            return _loginsService.Authentication(User);
        }

        [HttpPost("user-signup")]
        public ActionResult<UserSignup> Signup(Models.User user)
        {
            return _loginsService.Signup(user);
        }
    }
}
