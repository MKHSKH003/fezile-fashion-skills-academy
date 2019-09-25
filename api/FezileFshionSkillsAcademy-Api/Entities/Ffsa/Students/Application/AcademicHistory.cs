using System;
using System.Collections.Generic;

namespace FezileFashionSkillsAcademy.Entities
{
    public partial class AcademicHistory
    {
        public int Id { get; set; }
        public int? HighSchoolRecordId { get; set; }
        public int? TertiaryStudyRecordId { get; set; }
    }
}
