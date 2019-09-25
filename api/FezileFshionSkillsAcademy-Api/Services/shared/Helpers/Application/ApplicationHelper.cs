using FezileFashionSkillsAcademy.Entities;

namespace FezileFashionSkillsAcademy.Services.shared.Helpers
{
    public class ApplicationHelper : IApplicationHelper
    {
        private readonly Context _ffsaDbContext;

        public ApplicationHelper(Context ffsaDbContext)
        {
            _ffsaDbContext = ffsaDbContext;
        }

        public int SaveStudentsDetails(Models.StudentDetails StudentDetails)
        {
            var dbStudentDetails = new StudentDetails()
            {
                Surname = StudentDetails.Surname,
                FirstNames  = StudentDetails.FirstNames,
                Idnumber = StudentDetails.Idnumber,
                ResidentialAddressId = SaveAddress(StudentDetails.ResidentialAddress),
                PostalAddressId = SaveAddress(StudentDetails.PostalAddress),
                TelWork = StudentDetails.TelWork,
                TelHome = StudentDetails.TelHome,
                Cell = StudentDetails.Cell,
                Fax = StudentDetails.Fax,
                Email = StudentDetails.Email,
                Title = StudentDetails.Title,
                Race = StudentDetails.Race,
                OtherRace = StudentDetails.OtherRace,
                Gander = StudentDetails.Gander,
                DisabilitiesOrMedicalConditionAffectStudies = StudentDetails.DisabilitiesOrMedicalConditionAffectStudies,
                NatureOfDisabilityOrMedicalCondition = StudentDetails.NatureOfDisabilityOrMedicalCondition
            };

            _ffsaDbContext.Add(dbStudentDetails);
            _ffsaDbContext.SaveChanges();

            return dbStudentDetails.Id;
        }

        public int SaveMarketingDetails(Models.Marketing Marketing)
        {
            var dbMarketing = new Marketing()
            {
                MarketingMediaId = Marketing.MarketingMediaId,
                GuidanceConsellorId = SaveGuidanceConsellor(Marketing.MarketingMediaGuidanceConsellor)
            };

            _ffsaDbContext.Add(dbMarketing);
            _ffsaDbContext.SaveChanges();

            return dbMarketing.Id;
        }

        public int SaveParentOrGuardianDetails(Models.ParentOrGuardianDetails ParentOrGuardianDetails)
        {
            var dbParentOrGuardianDetails = new ParentOrGuardianDetails()
            {
                Relationship = ParentOrGuardianDetails.Relationship,
                Idnumber = ParentOrGuardianDetails.Idnumber,
                ResidentialAddressId = SaveAddress(ParentOrGuardianDetails.ResidentialAddress),
                PostalAddressId = SaveAddress(ParentOrGuardianDetails.PostalAddress),
                TelWork = ParentOrGuardianDetails.TelWork,
                TelHome = ParentOrGuardianDetails.TelHome,
                Cell = ParentOrGuardianDetails.Cell,
                Email = ParentOrGuardianDetails.Email
            };

            _ffsaDbContext.Add(dbParentOrGuardianDetails);
            _ffsaDbContext.SaveChanges();

            return dbParentOrGuardianDetails.Id;
        }

        public int SaveAcademicHistory(Models.AcademicHistory academicHistory)
        {
            var dbAcademicHistory = new AcademicHistory()
            {
                HighSchoolRecordId = SaveHighSchoolRecord(academicHistory.HighSchoolRecord),
                TertiaryStudyRecordId = SaveTertiaryStudyRecord(academicHistory.TertiaryStudyRecord)
            };

            _ffsaDbContext.Add(dbAcademicHistory);
            _ffsaDbContext.SaveChanges();

            return dbAcademicHistory.Id;
        }
        public int SaveDeclaration(Models.Declaration declaration)
        {
            var dbDeclaration = new Declaration()
            {
                ApplicantDeclarationId = SaveApplicantDeclaration(declaration.ApplicantDeclaration),
                BenifactorDeclarationId = SaveBenifactorDeclaration(declaration.BenifactorDeclaration)
            };

            _ffsaDbContext.Add(dbDeclaration);
            _ffsaDbContext.SaveChanges();

            return dbDeclaration.Id;
        }

        public int SaveBenifactorDeclaration(Models.BenifactorDeclaration benifactorDeclaration)
        {
            var dbBenifactorDeclaration = new BenifactorDeclaration()
            {
                SignatureId = SaveSignature(benifactorDeclaration.Signature),
                Idnumber = benifactorDeclaration.Idnumber
            };

            _ffsaDbContext.Add(dbBenifactorDeclaration);
            _ffsaDbContext.SaveChanges();

            return dbBenifactorDeclaration.Id;
        }

        public int SaveApplicantDeclaration(Models.ApplicantDeclaration applicantDeclaration)
        {
            var dbApplicantDeclaration = new ApplicantDeclaration()
            {
                FullName = applicantDeclaration.FullName,
                IdorPassportNumber = applicantDeclaration.IdorPassportNumber,
                ApplicantSignatureId = SaveSignature(applicantDeclaration.ApplicantSignature),
                WitnessSignatureId = SaveSignature(applicantDeclaration.WitnessSignature),
                ParentOrGuardianDetailsSignatureId = SaveSignature(applicantDeclaration.ParentOrGuardianDetailsSignature)
            };

            _ffsaDbContext.Add(dbApplicantDeclaration);
            _ffsaDbContext.SaveChanges();

            return dbApplicantDeclaration.Id;
        }

        public int SaveSignature(Signature signature)
        {
            var dbSignature = new Signature()
            {
                SignatureInitials = signature.SignatureInitials,
                Date = signature.Date
            };

            _ffsaDbContext.Add(dbSignature);
            _ffsaDbContext.SaveChanges();

            return dbSignature.Id;
        }

        public int SaveTertiaryStudyRecord(Models.TertiaryStudyRecord tertiaryStudyRecord)
        {
            var dbTertiaryStudyRecord = new TertiaryStudyRecord()
            {
                TertiaryYear1RecordId = SaveTertiaryYearRecord(tertiaryStudyRecord.TertiaryYear1Record),
                TertiaryYear2RecordId = SaveTertiaryYearRecord(tertiaryStudyRecord.TertiaryYear2Record),
                TertiaryYear3RecordId = SaveTertiaryYearRecord(tertiaryStudyRecord.TertiaryYear3Record)
            };

            _ffsaDbContext.Add(dbTertiaryStudyRecord);
            _ffsaDbContext.SaveChanges();

            return dbTertiaryStudyRecord.Id;
        }

        public int SaveTertiaryYearRecord(TertiaryYearRecord tertiaryYearRecord)
        {
            var dbTertiaryYearRecord = new TertiaryYearRecord()
            {
                QualificationDescription = tertiaryYearRecord.QualificationDescription,
                Institution = tertiaryYearRecord.Institution,
                TotalCredits = tertiaryYearRecord.TotalCredits,
                YearsOfStudy = tertiaryYearRecord.YearsOfStudy,
                CompletedId = tertiaryYearRecord.CompletedId
            };

            _ffsaDbContext.Add(dbTertiaryYearRecord);
            _ffsaDbContext.SaveChanges();

            return dbTertiaryYearRecord.Id;
        }

        public int SaveHighSchoolRecord(Models.HighSchoolRecord highSchoolRecord)
        {
            var dbHighSchoolRecord = new HighSchoolRecord()
            {
                LasHighSchoolAttended = highSchoolRecord.LasHighSchoolAttended,
                Year = highSchoolRecord.Year,
                Country = highSchoolRecord.Country,
                Aggregate = highSchoolRecord.Aggregate,
                HighSchoolSeniorCertificateId = saveHighSchoolSeniorCertificate(highSchoolRecord.HighSchoolSeniorCertificate)
            };

            _ffsaDbContext.Add(dbHighSchoolRecord);
            _ffsaDbContext.SaveChanges();

            return dbHighSchoolRecord.Id;
        }

        public int saveHighSchoolSeniorCertificate(HighSchoolSeniorCertificate highSchoolSeniorCertificate)
        {
            var dbHighSchoolSeniorCertificate = new HighSchoolSeniorCertificate()
            {
                Description = highSchoolSeniorCertificate.Description
            };

            _ffsaDbContext.Add(dbHighSchoolSeniorCertificate);
            _ffsaDbContext.SaveChanges();

            return dbHighSchoolSeniorCertificate.Id;
        }

        public int SaveGuidanceConsellor(Models.MarketingMediaGuidanceConsellor MarketingMediaGuidanceConsellor)
        {
            var dbMarketingMediaGuidanceConsellor = new MarketingMediaGuidanceConsellor()
            {
                Name = MarketingMediaGuidanceConsellor.Name,
                Contact = MarketingMediaGuidanceConsellor.Contact
            };

            _ffsaDbContext.Add(dbMarketingMediaGuidanceConsellor);
            _ffsaDbContext.SaveChanges();

            return dbMarketingMediaGuidanceConsellor.Id;
        }

        public int SaveAddress(Address address)
        {
            var dbAddress = new Address()
            {
                Line1 = address.Line1,
                Line2 = address.Line2,
                Line3 = address.Line3,
                PostalCode = address.PostalCode
            };

            _ffsaDbContext.Add(dbAddress);
            _ffsaDbContext.SaveChanges();

            return dbAddress.Id;
        }
    }
}
