using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Services.shared.Helpers;

namespace FezileFashionSkillsAcademy.Services
{
    public class EmailsService : IEmailsService
    {
        private readonly Context _ffsaDbContext;
        private readonly ICipherService _cipherService;
        private readonly IEmailHelper _emailhelper;

        public EmailsService(Context ffsaDbContext, ICipherService cipherService, IEmailHelper emailhelper)
        {
            _ffsaDbContext = ffsaDbContext;
            _cipherService = cipherService;
            _emailhelper = emailhelper;
        }

        public void SendConfirmationEmail(string name, string email, string password)
        {
            _emailhelper.SendConfirmationEmail(name, email, password);
        }

        public bool IsValidEmail(string emailAddress)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(emailAddress);
                return addr.Address == emailAddress;
            }
            catch
            {
                return false;
            }
        }

    }
}
