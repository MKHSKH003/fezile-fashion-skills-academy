using System.Net.Mail;

namespace FezileFashionSkillsAcademy.Services.shared.Helpers
{
    public interface IEmailHelper
    {
        string constructConfirmationEmailBody(string name, string email, string password);
        MailMessage construcApplicationDetailsBody(Models.Application application);
    }
}
