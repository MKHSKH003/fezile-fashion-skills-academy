using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public class StudentDetails
    {
        public int Id { get; set; }
        public string Surname { get; set; }
        public string FirstNames { get; set; }
        public int? Idnumber { get; set; }
        public Address ResidentialAddress { get; set; }
        public Address PostalAddress { get; set; }
        public string TelWork { get; set; }
        public string TelHome { get; set; }
        public string Cell { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Race { get; set; }
        public string OtherRace { get; set; }
        public string Gander { get; set; }
        public string DisabilitiesOrMedicalConditionAffectStudies { get; set; }
        public string NatureOfDisabilityOrMedicalCondition { get; set; }
    }
}
