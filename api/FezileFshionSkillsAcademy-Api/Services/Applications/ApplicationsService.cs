using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Services.shared.Helpers;

namespace FezileFashionSkillsAcademy.Services
{
    public class ApplicationsService : IApplicationsService
    {
        private readonly Context _ffsaDbContext;
        private readonly IEmailsService _emailService;
        private readonly IApplicationHelper _applicationHelper;

        public ApplicationsService(Context ffsaDbContext, IEmailsService emailService, IApplicationHelper applicationHelper)
        {
            _ffsaDbContext = ffsaDbContext;
            _emailService = emailService;
            _applicationHelper = applicationHelper;
        }

        public void ApplicationForAdmission(Models.Application application)
        {
            var dbApplication = new Application()
            {
                StudentDetailsId = _applicationHelper.SaveStudentsDetails(application.StudentDetails),
                MarketingId = _applicationHelper.SaveMarketingDetails(application.Marketing),
                CourseId = application.CourseId,
                ParentOrGuardianDetailsId = _applicationHelper.SaveParentOrGuardianDetails(application.ParentOrGuardianDetails),
                AcademicHistoryId = _applicationHelper.SaveAcademicHistory(application.AcademicHistory),
                DeclarationId = _applicationHelper.SaveDeclaration(application.Declaration)
            };

            _ffsaDbContext.Add(dbApplication);
            _ffsaDbContext.SaveChanges();
        }
    }
}
