namespace FezileFashionSkillsAcademy.Models
{
    public class Application
    {
        public int Id { get; set; }
        public StudentDetails StudentDetails { get; set; }
        public Marketing Marketing { get; set; }
        public int? CourseId { get; set; }
        public ParentOrGuardianDetails ParentOrGuardianDetails { get; set; }
        public AcademicHistory AcademicHistory { get; set; }
        public Declaration Declaration { get; set; }
    }
}
