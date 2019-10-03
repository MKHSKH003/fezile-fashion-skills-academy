using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public class ApplicantDeclaration
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string IdorPassportNumber { get; set; }
        public Signature ApplicantSignature { get; set; }
        public Signature WitnessSignature { get; set; }
        public Signature ParentOrGuardianDetailsSignature { get; set; }
    }
}