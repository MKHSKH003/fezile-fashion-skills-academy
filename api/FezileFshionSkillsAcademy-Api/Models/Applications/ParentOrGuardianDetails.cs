using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public class ParentOrGuardianDetails
    {
        public int Id { get; set; }
        public string Relationship { get; set; }
        public string Idnumber { get; set; }
        public Address ResidentialAddress { get; set; }
        public Address PostalAddress { get; set; }
        public string TelWork { get; set; }
        public string TelHome { get; set; }
        public string Cell { get; set; }
        public string Email { get; set; }
    }
}
