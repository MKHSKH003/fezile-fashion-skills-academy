using FezileFashionSkillsAcademy.Services;
using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FezileFashionSkillsAcademy.Services
{
    public class LoginService : ILoginService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;
        private readonly IEmailService _emailService;

        public LoginService(Context ffsaDbContext, ICipherService cipherService, IEmailService emailService)
        {
            _ffsaDbContext = ffsaDbContext;
            _cipherService = cipherService;
            _emailService = emailService;
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


        public UserSignup Signup(Models.User User)
        {
            var users = _ffsaDbContext.Users;
            UserSignup userSignup = new UserSignup();

            if (!_emailService.IsValidEmail(User.Email))
            {
                userSignup.message = "Invalid email address!";
            }
            else if (users.SingleOrDefault(u => u.Email == User.Email) != null)
            {
                userSignup.message = "Email already exists!";
            }
            else
            {
                var dbNewUser = new Entities.User()
                {
                    FirstName = User.FirstName,
                    LastName = User.LastName,
                    Email = User.Email,
                    Password = _cipherService.Encrypt(User.Password)
                };

                _ffsaDbContext.Add(dbNewUser);
                _ffsaDbContext.SaveChanges();

                userSignup.User = dbNewUser;
            }

            return userSignup;
        }
    }
}
