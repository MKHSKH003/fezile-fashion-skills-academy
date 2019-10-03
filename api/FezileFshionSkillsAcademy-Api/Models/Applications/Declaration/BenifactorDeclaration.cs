using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Models
{
    public class BenifactorDeclaration
    {
        public int Id { get; set; }
        public string fullName { get; set; }
        public Signature Signature { get; set; }
        public string Idnumber { get; set; }
    }
}
