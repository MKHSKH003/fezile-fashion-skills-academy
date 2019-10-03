using System.Net.Mail;

namespace FezileFashionSkillsAcademy.Services.shared.Helpers
{
    public interface IEmailHelper
    {
        string constructRegistrationConfirmationEmailBody(string name, string email, string password);
        string constructApplicationConfirmationEmailBody(Models.Application application);
        MailMessage construcApplicationDetailsBody(Models.Application application);
        SmtpClient smtpClient();
        void constructEmailBody(Models.Email email);
    }
}
