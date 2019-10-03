using FezileFashionSkillsAcademy.Services;
using FezileFashionSkillsAcademy.Entities;
using FezileFashionSkillsAcademy.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FezileFashionSkillsAcademy.Services
{
    public class StudentsService : IStudentsService
    {
        private readonly Context _ffsaDbContext;
        private readonly IEmailsService _emailsService;

        public StudentsService(Context ffsaDbContext, IEmailsService emailsService)
        {
            _ffsaDbContext = ffsaDbContext;
            _emailsService = emailsService;
        }
    }
}
