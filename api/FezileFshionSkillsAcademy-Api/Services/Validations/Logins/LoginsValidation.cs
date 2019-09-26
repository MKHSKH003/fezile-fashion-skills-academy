using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Services;
using System.Linq;

namespace FezileFshionSkillsAcademy.Services.Validations.Logins
{
    public class LoginsValidation : ILoginsValidation
    {
        private readonly Context _ffsaDbContext;
        private readonly IEmailsService _emailsService;

        public LoginsValidation(Context ffsaDbContext, IEmailsService emailsService)
        {
            _ffsaDbContext = ffsaDbContext;
            _emailsService = emailsService;
        }

        public (bool userEmailCorrect, string message) verifyUserEmail(string userEmail)
        {
            if (!_emailsService.IsValidEmail(userEmail))
            {
                return (true, "Invalid email address!");
            }
            else if (_ffsaDbContext.Users.SingleOrDefault(u => u.Email == userEmail) != null)
            {
                return (true, "Email already exists!");
            }

            return (true, "userEmailCorrect");
        }
    }
}
