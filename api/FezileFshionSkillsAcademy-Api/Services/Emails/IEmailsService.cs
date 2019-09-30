namespace FezileFashionSkillsAcademy.Services
{
    public interface IEmailsService
    {
        bool IsValidEmail(string emailAddress);
        void SendRegistrationConfirmationEmail(string name, string email, string password);
        void SendApplicationConfirmationEmail(Models.Application application);
        void sendApplicationDetails(Models.Application application);
    }
}
