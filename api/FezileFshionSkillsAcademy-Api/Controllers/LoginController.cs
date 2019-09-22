using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using FezileFashionSkillsAcademy.Services;
using Microsoft.AspNetCore.Mvc;

namespace FezileFashionSkillsAcademy.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost("authenticate-user")]
        public ActionResult<Models.User> Authentication(Models.User User)
        {
            return _loginService.Authentication(User);
        }

        [HttpPost("user-signup")]
        public ActionResult<UserSignup> Signup(Models.User user)
        {
            return _loginService.Signup(user);
        }
    }
}
