using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;

namespace FezileFashionSkillsAcademy.Services
{
    public interface ILoginsService
    {
        Models.User Authentication(Models.User User);
        UserSignup Signup(Models.User User);
    }
}
