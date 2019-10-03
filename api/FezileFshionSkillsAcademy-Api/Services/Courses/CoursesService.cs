using FezileFashionSkillsAcademy.Services;
using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FezileFashionSkillsAcademy.Services
{
    public class CoursesService : ICoursesService
    {
        private readonly Context _ffsaDbContext;
        private readonly IEmailsService _emailsService;

        public CoursesService(Context ffsaDbContext, IEmailsService emailsService)
        {
            _ffsaDbContext = ffsaDbContext;
            _emailsService = emailsService;
        }

        
    }
}
