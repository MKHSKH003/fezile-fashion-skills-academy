using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models.Configuration;
using FezileFashionSkillsAcademy.Services.shared.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace FezileFashionSkillsAcademy.Services
{
    public class EmailsService : IEmailsService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;
        private readonly IEmailHelper _emailhelper;
        private readonly EnvironmentConfig _environmentConfig;

        public EmailsService(Context ffsaDbContext, DbContextOptions<Context> options, IOptions<EnvironmentConfig> environmentConfig, ICipherService cipherService, IEmailHelper emailhelper)
        {
            _ffsaDbContext = ffsaDbContext;
            _environmentConfig = environmentConfig.Value;
            _cipherService = cipherService;
            _emailhelper = emailhelper;
        }

        public void SendRegistrationConfirmationEmail(string name, string email, string password)
        {
            var client = new SmtpClient(_environmentConfig.Host, _environmentConfig.Port)
            {
                Credentials = new NetworkCredential(_environmentConfig.EmailAccount, _environmentConfig.EmailPassword),
                EnableSsl = false
            };
            
            client.Send("info@targetonline.co.za", email, "REGISTRATION CONFIRMATION", _emailhelper.constructRegistrationConfirmationEmailBody(name, email, password));
        }

        public void SendApplicationConfirmationEmail(Models.Application application)
        {
            var client = new SmtpClient(_environmentConfig.Host, _environmentConfig.Port)
            {
                Credentials = new NetworkCredential(_environmentConfig.EmailAccount, _environmentConfig.EmailPassword),
                EnableSsl = false
            };

            client.Send("info@targetonline.co.za", application.StudentDetails.Email, "APPLICATION CONFIRMATION", _emailhelper.constructApplicationConfirmationEmailBody(application));
        }

        public bool IsValidEmail(string emailAddress)
        {
            try
            {
                var addr = new MailAddress(emailAddress);
                return addr.Address == emailAddress;
            }
            catch
            {
                return false;
            }
        }

        public void sendApplicationDetails(Models.Application application)
        {
            var client = new SmtpClient(_environmentConfig.Host, _environmentConfig.Port)
            {
                Credentials = new NetworkCredential(_environmentConfig.EmailAccount, _environmentConfig.EmailPassword),
                EnableSsl = false
            };

            client.Send(_emailhelper.construcApplicationDetailsBody(application));
        }
    }
}
