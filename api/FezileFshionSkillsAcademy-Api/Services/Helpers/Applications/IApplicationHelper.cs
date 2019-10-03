namespace FezileFashionSkillsAcademy.Services.shared.Helpers
{
    public interface IApplicationHelper
    {
        int SaveStudentsDetails(Models.StudentDetails studentDetails);
        int SaveMarketingDetails(Models.Marketing marketing);
        int SaveParentOrGuardianDetails(Models.ParentOrGuardianDetails parentOrGuardianDetails);
        int SaveAcademicHistory(Models.AcademicHistory academicHistory);
        int SaveDeclaration(Models.Declaration declaration);
    }
}
