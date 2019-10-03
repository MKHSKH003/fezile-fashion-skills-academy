using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models.Configuration;
using FezileFashionSkillsAcademy.Services.shared.Helpers;
using FezileFshionSkillsAcademy.Services.Validations.Emails;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net.Mail;

namespace FezileFashionSkillsAcademy.Services
{
    public class EmailsService : IEmailsService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;
        private readonly IEmailHelper _emailhelper;
        private readonly IEmailsValidation _emailsValidation;
        private readonly EnvironmentConfig _environmentConfig;
        private readonly SmtpClient _smtpClient;

        public EmailsService(Context ffsaDbContext, DbContextOptions<Context> options, IOptions<EnvironmentConfig> environmentConfig, ICipherService cipherService, IEmailHelper emailhelper, IEmailsValidation emailsValidation)
        {
            _ffsaDbContext = ffsaDbContext;
            _environmentConfig = environmentConfig.Value;
            _cipherService = cipherService;
            _emailhelper = emailhelper;
            _smtpClient = emailhelper.smtpClient();
            _emailsValidation = emailsValidation;
        }

        public void SendRegistrationConfirmationEmail(string name, string email, string password)
        {
            _smtpClient.Send("info@targetonline.co.za", email, "REGISTRATION CONFIRMATION", _emailhelper.constructRegistrationConfirmationEmailBody(name, email, password));
        }

        public void SendApplicationConfirmationEmail(Models.Application application)
        {
            _smtpClient.Send("info@targetonline.co.za", application.StudentDetails.Email, "APPLICATION CONFIRMATION", _emailhelper.constructApplicationConfirmationEmailBody(application));
        }

        public string SendEmail(Models.Email email)
        {
            var isValidEmail = _emailsValidation.IsEmailAddressValid(email.EmailAddress);

            if (isValidEmail.isValid)
            {
                _smtpClient.Send("info@targetonline.co.za", _environmentConfig.FFSA, "NAME: " + email.Name + " Email: " + email.EmailAddress, email.Message);
                return isValidEmail.message;
            }

            return isValidEmail.message;
        }

        public void sendApplicationDetails(Models.Application application)
        {
            _smtpClient.Send(_emailhelper.construcApplicationDetailsBody(application));
        }
    }
}
