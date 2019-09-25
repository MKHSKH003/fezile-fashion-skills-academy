using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public partial class TertiaryStudyRecord
    {
        public int Id { get; set; }
        public TertiaryYearRecord TertiaryYear1Record { get; set; }
        public TertiaryYearRecord TertiaryYear2Record { get; set; }
        public TertiaryYearRecord TertiaryYear3Record { get; set; }
    }
}
