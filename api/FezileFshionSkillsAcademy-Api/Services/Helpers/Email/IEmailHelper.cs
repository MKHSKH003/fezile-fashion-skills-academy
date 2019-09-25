namespace FezileFashionSkillsAcademy.Services.shared.Helpers
{
    public interface IEmailHelper
    {
        void SendConfirmationEmail(string name, string email, string password);
    }
}
