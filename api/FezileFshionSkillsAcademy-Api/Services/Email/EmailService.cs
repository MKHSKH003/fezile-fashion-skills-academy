using FezileFashionSkillsAcademy.Services;
using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FezileFashionSkillsAcademy.Services
{
    public class EmailService : IEmailService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;

        public EmailService(Context ffsaDbContext, ICipherService cipherService)
        {
            _ffsaDbContext = ffsaDbContext;
            _cipherService = cipherService;
        }

        public bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

    }
}
