using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using System.Linq;

namespace FezileFashionSkillsAcademy.Services
{
    public class LoginsService : ILoginsService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;
        private readonly IEmailsService _emailsService;

        public LoginsService(Context ffsaDbContext, ICipherService cipherService, IEmailsService emailsService)
        {
            _ffsaDbContext = ffsaDbContext;
            _cipherService = cipherService;
            _emailsService = emailsService;
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
            var users = _ffsaDbContext.Users;
            UserSignup userSignup = new UserSignup();

            if (!_emailsService.IsValidEmail(user.Email))
            {
                userSignup.message = "Invalid email address!";
            }
            else if (users.SingleOrDefault(u => u.Email == user.Email) != null)
            {
                userSignup.message = "Email already exists!";
            }
            else
            {
                //_emailsService.SendConfirmationEmail(user.FirstName, user.Email, user.Password);
                var dbNewUser = new Entities.User()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Password = _cipherService.Encrypt(user.Password)
                };

                _ffsaDbContext.Add(dbNewUser);
                _ffsaDbContext.SaveChanges();

                userSignup.User = dbNewUser;
            }

            return userSignup;
        }
    }
}
