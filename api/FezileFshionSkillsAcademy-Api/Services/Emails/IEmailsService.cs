namespace FezileFashionSkillsAcademy.Services
{
    public interface IEmailsService
    {
        bool IsValidEmail(string emailAddress);
        void SendConfirmationEmail(string name, string email, string password);
        //void sendApplicationDetails(Models.Application application);
    }
}
