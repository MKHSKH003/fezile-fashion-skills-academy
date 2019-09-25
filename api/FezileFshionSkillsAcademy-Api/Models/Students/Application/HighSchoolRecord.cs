using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public class HighSchoolRecord
    {
        public int Id { get; set; }
        public string LasHighSchoolAttended { get; set; }
        public int? Year { get; set; }
        public string Country { get; set; }
        public string Aggregate { get; set; }
        public HighSchoolSeniorCertificate HighSchoolSeniorCertificate { get; set; }
    }
}
