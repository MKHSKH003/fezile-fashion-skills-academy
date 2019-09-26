using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models.Configuration;
using FezileFshionSkillsAcademy.Utils.Constants;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
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

        public string constructConfirmationEmailBody(string name, string email, string password)
        {
            var message = new StringBuilder();
            message.Append("Hi " + name + "\n\n");
            message.Append("This is a confirmation email that you have been successfully registered with Fezile Fashion Skills Academy, welcome." + "\n\n");

            message.Append("USERNAME: " + email + "\n");
            message.Append("PASSWORD: " + password + " (keep you password safe do not share it with anyone.)" + "\n\n");

            message.Append("Kind Regards" + "\n" + "Client Support");

            return  message.ToString();
        }

        public MailMessage construcApplicationDetailsBody(Models.Application application)
        {
            MailMessage message = new MailMessage("info@targetonline.co.za", _environmentConfig.FFSA);
            message.IsBodyHtml = true;
            message.Subject = "APPLICATION FOR ADMISSION";

            message.Body += "Hi  Team" + SystemConstants.lineSkip;
            message.Body += "This email consist of student application details please keep in touch with the student asap." + SystemConstants.lineSkip;

            message.Body += constructStudentDetailsBodySection(application.StudentDetails);
            message.Body += constructMarketingDetailsBodySection(application.Marketing);
            message.Body += constructCourseDetailsBodySection(application.CourseId+"");

            message.Body += "Kind Regards" + SystemConstants.lineBreak + "Client Support";

            return message;
        }

        public string constructCourseDetailsBodySection(string course)
        {
            string[] CourseDetailsTitles = { "Select course:" };
            string[] values = { course };

            return ConstructTable(CourseDetailsTitles, values, "3. COURSE APPLYING FOR");
        }

        public string constructMarketingDetailsBodySection(Models.Marketing marketingDetails)
        {
            string[] values = {
                marketingDetails.MarketingMediaId+"",
                "",
                marketingDetails.MarketingMediaGuidanceConsellor.Name,
                marketingDetails.MarketingMediaGuidanceConsellor.Contact,
            };

            return ConstructTable(SystemConstants.marketingDetailsTitles, values, "2. MARKETING");
        }

        public string constructStudentDetailsBodySection(Models.StudentDetails studentDetails)
        {
            string[] values = {
                studentDetails.Surname,
                studentDetails.FirstNames,
                studentDetails.Idnumber.ToString(),
                studentDetails.ResidentialAddress.Line1,
                studentDetails.ResidentialAddress.Line2,
                studentDetails.ResidentialAddress.Line3,
                studentDetails.ResidentialAddress.PostalCode.ToString(),
                studentDetails.PostalAddress.Line1,
                studentDetails.PostalAddress.Line2,
                studentDetails.PostalAddress.Line3,
                studentDetails.PostalAddress.PostalCode.ToString(),
                studentDetails.TelHome,
                studentDetails.TelWork,
                studentDetails.Cell,
                studentDetails.Fax,
                studentDetails.Email,
                studentDetails.Title,
                studentDetails.Race,
                studentDetails.OtherRace,
                studentDetails.DisabilitiesOrMedicalConditionAffectStudies,
                studentDetails.NatureOfDisabilityOrMedicalCondition
            };

            return ConstructTable(SystemConstants.studentDetailsTitles, values, "1. STUDENT DETAILS");
        }


        public string ConstructTable(string[] tableTiles, string[] values, string header)
        {
            string bodySection = header + SystemConstants.lineSkip;

            bodySection += SystemConstants.htmlTableStart;

            for (int index = 0; index < tableTiles.Length; index++)
            {
                bodySection = bodySection + SystemConstants.htmlTrStart;
                bodySection = bodySection + SystemConstants.htmlTdStart + tableTiles[index] + SystemConstants.htmlTdEnd;
                bodySection = bodySection + SystemConstants.htmlTdStart + values[index] + SystemConstants.htmlTdEnd;
                bodySection = bodySection + SystemConstants.htmlTrEnd;
            }

            bodySection = bodySection + SystemConstants.htmlTableEnd;

            return bodySection + SystemConstants.lineSkip;
        }
    }
}
