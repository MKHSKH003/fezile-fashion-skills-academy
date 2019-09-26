using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using FezileFshionSkillsAcademy.Services.Validations.Logins;
using System.Linq;

namespace FezileFashionSkillsAcademy.Services
{
    public class LoginsService : ILoginsService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;
        private readonly IEmailsService _emailsService;
        private readonly ILoginsValidation _loginsValidation;


        public LoginsService(Context ffsaDbContext, ICipherService cipherService, IEmailsService emailsService, ILoginsValidation loginsValidation)
        {
            _ffsaDbContext = ffsaDbContext;
            _cipherService = cipherService;
            _emailsService = emailsService;
            _loginsValidation = loginsValidation;
        }

        public Models.User Authentication(Models.User User)
        {
           var dbUser = _ffsaDbContext.Users
                .SingleOrDefault(user => user.Email == User.Email && _cipherService.Decrypt(user.Password) == User.Password);

            return dbUser == null ? new Models.User()
                : new Models.User()
                {
                    Id = dbUser.Id,
                    FirstName = dbUser.FirstName,
                    LastName = dbUser.LastName,
                    Email = dbUser.Email
                };
        }


        public UserSignup Signup(Models.User user)
        {
            var verifyUserEmail = _loginsValidation.verifyUserEmail(user.Email);
            UserSignup userSignup = new UserSignup() { message = verifyUserEmail.message };

            if (verifyUserEmail.userEmailCorrect)
            {
                userSignup.message = verifyUserEmail.message;
            }
            else
            {
                var dbNewUser = new Entities.User()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Password = _cipherService.Encrypt(user.Password)
                };

                _ffsaDbContext.Add(dbNewUser);
                _ffsaDbContext.SaveChanges();

                _emailsService.SendConfirmationEmail(user.FirstName, user.Email, user.Password);

                userSignup.User = dbNewUser;
            }

            return userSignup;
        }
    }
}
