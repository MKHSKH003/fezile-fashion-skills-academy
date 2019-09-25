using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace FezileFashionSkillsAcademy.Services.shared.Helpers
{
    public class EmailHelper : IEmailHelper
    {
        private readonly Context _ffsaDbContext;
        private readonly EnvironmentConfig _environmentConfig;

        public EmailHelper(DbContextOptions<Context> options, IOptions<EnvironmentConfig> environmentConfig, Context ffsaDbContext)
        {
            _ffsaDbContext = ffsaDbContext;
            _environmentConfig = environmentConfig.Value;
        }

        public void SendConfirmationEmail(string name, string email, string password)
        {
            var client = new SmtpClient(_environmentConfig.Host, _environmentConfig.Port)
            {
                Credentials = new NetworkCredential(_environmentConfig.EmailAccount, _environmentConfig.EmailPassword),
                EnableSsl = false
            };
            var message = new StringBuilder();
            message.Append("Hi " + "ddd" + "\n\n");
            message.Append("This is a confirmation email that you have been successfully registered with FEZILE FASHION SKILLS ACADEMY, welcome." + "\n\n");

            message.Append("USERNAME: " + email + "\n");
            message.Append("PASSWORD: " + password + " (keep you password safe do not share it with anyone.)" + "\n\n");

            message.Append("Kind Regards" + "\n" + "Client Support");

            client.Send("infos@targetonline.co.za", email, "REGISTRATION CONFIRMATION", message.ToString());
        }
    }
}
