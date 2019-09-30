using System;
using System.Collections.Generic;

namespace FezileFashionSkillsAcademy.Models
{
    public class Marketing
    {
        public int Id { get; set; }
        public int MarketingMediaId { get; set; }
        public string MarketingMedia { get; set; }
        public MarketingMediaGuidanceConsellor MarketingMediaGuidanceConsellor { get; set; }
    }
}
