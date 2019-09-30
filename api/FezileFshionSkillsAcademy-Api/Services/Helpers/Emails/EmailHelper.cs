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

        public string constructRegistrationConfirmationEmailBody(string name, string email, string password)
        {
            var message = new StringBuilder();
            message.Append("Hi " + name + "\n\n");
            message.Append("This is a confirmation email that you have been successfully registered with Fezile Fashion Skills Academy, welcome." + "\n\n");

            message.Append("USERNAME: " + email + "\n");
            message.Append("PASSWORD: " + password + " (keep you password safe do not share it with anyone.)" + "\n\n");

            message.Append("Kind Regards" + "\n" + "Client Support");

            return  message.ToString();
        }

        public string constructApplicationConfirmationEmailBody(Models.Application application)
        {
            var message = new StringBuilder();
            message.Append("Hi " + application.StudentDetails.FirstNames + "\n\n");
            message.Append("This is a confirmation email that we have recieved your application for course: " + application.Course.Name + "\n");

            message.Append("The team wiil be in touch with you soon." + "\n\n");

            message.Append("Kind Regards" + "\n" + "Client Support");

            return message.ToString();
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
            message.Body += constructCourseDetailsBodySection(application.Course.Name);
            message.Body += constructParentOrGuardianDetailsBodySection(application.ParentOrGuardianDetails);
            message.Body += constructAcademicHistoryBodySection(application.AcademicHistory);
            message.Body += constructDeclarationBodySection(application.Declaration);

            message.Body += "Kind Regards" + SystemConstants.lineBreak + "Client Support";

            return message;
        }

        public string constructDeclarationBodySection(Models.Declaration declaration)
        {
            string declarationBody = "<b>6. DECLARATION (Compulsory)</b>" + SystemConstants.lineSkip;

            string[] applicantValues = {
                declaration.ApplicantDeclaration.ApplicantSignature.SignatureInitials,
                declaration.ApplicantDeclaration.ApplicantSignature.Date,
                declaration.ApplicantDeclaration.WitnessSignature.SignatureInitials,
                declaration.ApplicantDeclaration.WitnessSignature.Date,
                declaration.ApplicantDeclaration.ParentOrGuardianDetailsSignature.SignatureInitials,
                declaration.ApplicantDeclaration.ParentOrGuardianDetailsSignature.Date,
            };

            string[] benifactorValues = {
                declaration.BenifactorDeclaration.Signature.SignatureInitials,
                declaration.BenifactorDeclaration.Signature.Date,
                declaration.BenifactorDeclaration.Idnumber.ToString(),
            };

            declarationBody += "I, <b><u>   " + declaration.ApplicantDeclaration.FullName + "   </u></b> (Full Name)," +
                "ID/Passport Number: <b><u>   " + declaration.ApplicantDeclaration.IdorPassportNumber + "   </u></b> , " +
                "the undersigned, declare that all the particulars supplied by me in this form are true, " +
                "complete and correct. I accept that incorrect or misleading information could lead to the cancellation of this application." + SystemConstants.lineSkip;

            declarationBody += ConstructTable(SystemConstants.applicantTitles, applicantValues, "Applicant");

            declarationBody += "<i>This section must be completed by the benefactor, i.e. the person who will be responsible for the payment of all tuition fees.</i>" + SystemConstants.lineSkip;

            declarationBody += "I, <b><u>   " + declaration.BenifactorDeclaration.fullName + "   </u></b> (Full Name), the undersigned, hereby acknowledge myself to be jointly and separately responsible for monies, " +
                "which the above mentioned applicant may at any stage be owing to FFSA (Pty) Ltd in terms of the agreement that he/she concluded with FFSA (Pty) Ltd, as set out above, including any change thereto." + SystemConstants.lineSkip;

            return declarationBody += ConstructTable(SystemConstants.benifactorTitles, benifactorValues, "Parent/Guardian/Benefactor");
        }

        public string constructAcademicHistoryBodySection(Models.AcademicHistory academicHistory)
        {
            string[] values = {
                "",
                academicHistory.HighSchoolRecord.LasHighSchoolAttended,
                academicHistory.HighSchoolRecord.Year.ToString(),
                academicHistory.HighSchoolRecord.Country,
                academicHistory.HighSchoolRecord.Aggregate,
                academicHistory.HighSchoolRecord.HighSchoolSeniorCertificate,
                "",
                "",
                "",
                academicHistory.TertiaryStudyRecord.TertiaryYear1Record.QualificationDescription,
                academicHistory.TertiaryStudyRecord.TertiaryYear1Record.Institution,
                academicHistory.TertiaryStudyRecord.TertiaryYear1Record.TotalCredits.ToString(),
                academicHistory.TertiaryStudyRecord.TertiaryYear1Record.YearsOfStudy.ToString(),
                academicHistory.TertiaryStudyRecord.TertiaryYear1Record.Completed,
                "",
                academicHistory.TertiaryStudyRecord.TertiaryYear2Record.QualificationDescription,
                academicHistory.TertiaryStudyRecord.TertiaryYear2Record.Institution,
                academicHistory.TertiaryStudyRecord.TertiaryYear2Record.TotalCredits.ToString(),
                academicHistory.TertiaryStudyRecord.TertiaryYear2Record.YearsOfStudy.ToString(),
                academicHistory.TertiaryStudyRecord.TertiaryYear2Record.Completed,
                "",
                academicHistory.TertiaryStudyRecord.TertiaryYear3Record.QualificationDescription,
                academicHistory.TertiaryStudyRecord.TertiaryYear3Record.Institution,
                academicHistory.TertiaryStudyRecord.TertiaryYear3Record.TotalCredits.ToString(),
                academicHistory.TertiaryStudyRecord.TertiaryYear3Record.YearsOfStudy.ToString(),
                academicHistory.TertiaryStudyRecord.TertiaryYear3Record.Completed,
            };

            return ConstructTable(SystemConstants.academicHistoryTitles, values, "5. ACADEMIC HISTORY");
        }

        public string constructParentOrGuardianDetailsBodySection(Models.ParentOrGuardianDetails parentOrGuardianDetails)
        {
            string[] values = {
                parentOrGuardianDetails.Relationship,
                parentOrGuardianDetails.Idnumber.ToString(),
                parentOrGuardianDetails.ResidentialAddress.Line1,
                parentOrGuardianDetails.ResidentialAddress.Line2,
                parentOrGuardianDetails.ResidentialAddress.Line3,
                parentOrGuardianDetails.ResidentialAddress.PostalCode.ToString(),
                parentOrGuardianDetails.PostalAddress.Line1,
                parentOrGuardianDetails.PostalAddress.Line2,
                parentOrGuardianDetails.PostalAddress.Line3,
                parentOrGuardianDetails.PostalAddress.PostalCode.ToString(),
                parentOrGuardianDetails.TelHome,
                parentOrGuardianDetails.TelWork,
                parentOrGuardianDetails.Cell,
                parentOrGuardianDetails.Email
            };

            return ConstructTable(SystemConstants.parentOrGuardianTitles, values, "4. PARENT/GUARDIAN");
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
                marketingDetails.MarketingMedia,
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
            string bodySection = "<b>" + header + "</b>" + SystemConstants.lineSkip;

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
