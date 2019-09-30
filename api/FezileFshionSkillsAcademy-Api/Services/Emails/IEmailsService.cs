namespace FezileFashionSkillsAcademy.Services
{
    public interface IEmailsService
    {
        void SendRegistrationConfirmationEmail(string name, string email, string password);
        void SendApplicationConfirmationEmail(Models.Application application);
        void sendApplicationDetails(Models.Application application);
        string SendEmail(Models.Email email);
    }
}
