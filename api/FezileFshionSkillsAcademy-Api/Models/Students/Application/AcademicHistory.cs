using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public partial class AcademicHistory
    {
        public int Id { get; set; }
        public HighSchoolRecord HighSchoolRecord { get; set; }
        public TertiaryStudyRecord TertiaryStudyRecord { get; set; }
    }
}
