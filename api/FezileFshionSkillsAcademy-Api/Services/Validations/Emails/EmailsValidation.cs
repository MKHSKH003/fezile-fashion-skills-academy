using FezileFashionSkillsAcademy.Entities;
using System.Net.Mail;

namespace FezileFshionSkillsAcademy.Services.Validations.Emails
{
    public class EmailsValidation : IEmailsValidation
    {
        private readonly Context _ffsaDbContext;

        public EmailsValidation(Context ffsaDbContext)
        {
            _ffsaDbContext = ffsaDbContext;
        }

        public (bool isValid, string message) IsEmailAddressValid(string emailAddress)
        {
            try
            {
                var addr = new MailAddress(emailAddress);
                return (addr.Address == emailAddress, "Email Address Valid.");
            }
            catch
            {
                return (false, "Email Address Invalid!");
            }
        }
    }
}
