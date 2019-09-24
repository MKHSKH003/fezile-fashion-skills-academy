USE targeton_Ffsa_Dev;

CREATE TABLE IF NOT EXISTS `User`
(
	 ID INT(11) NOT NULL AUTO_INCREMENT,
	 FirstName VARCHAR(50) NOT NULL, 
	 LastName VARCHAR(50) NOT NULL, 
	 Email VARCHAR(50) NOT NULL, 
	 Password VARCHAR(500) NOT NULL,
	 CONSTRAINT PK_Ffsa_User
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `Address` 
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	line1 VARCHAR(100) NULL,
	line2 VARCHAR(100) NULL, 
	line3 VARCHAR(100) NULL,
	postalCode INT(11) NULL,
	CONSTRAINT PK_Ffsa_Address
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `StudentDetails` 
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Surname VARCHAR(50) NOT NULL , 
	FirstNames VARCHAR(50) NOT NULL, 
	IDNumber INT(11) NULL, 
	ResidentialAddressID INT(11) NULL,  
	PostalAddressID INT(11) NULL, 
	TelWork VARCHAR(25) NULL, 
	TelHome VARCHAR(25) NULL, 
	Cell VARCHAR(25) NULL, 
	Fax VARCHAR(25) NULL, 
	Email VARCHAR(100) NULL, 
	Title VARCHAR(10) NULL, 
	Race VARCHAR(20) NULL,
	OtherRace VARCHAR(50) NULL, 
	Gander VARCHAR(20) NULL, 
	DisabilitiesOrMedicalConditionAffectStudies VARCHAR(10) NULL, 
	NatureOfDisabilityOrMedicalCondition VARCHAR(100) NULL, 
	CONSTRAINT PK_Ffsa_StudentDetails
		PRIMARY KEY (ID),
	CONSTRAINT FK_StudentDetails_ResidentialAddress
		FOREIGN KEY (ResidentialAddressID)
		REFERENCES Address(ID),
	CONSTRAINT FK_StudentDetails_PostalAddress
		FOREIGN KEY (PostalAddressID)
		REFERENCES Address(ID)
);

CREATE TABLE IF NOT EXISTS `MarketingMediaGuidanceConsellor`
( 
	ID INT NOT NULL AUTO_INCREMENT, 
	Name VARCHAR(50) NULL,
	Contact VARCHAR(50) NULL,	
	CONSTRAINT PF_Ffsa_MarketingMediaGuidanceConsellor
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `MarketingMedia`
( 
	ID INT NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(50) NOT NULL,
	CONSTRAINT PF_Ffsa_MarketingMedia
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `Marketing` 
( 
	ID INT NOT NULL AUTO_INCREMENT, 
	MarketingMediaID INT(11) NOT NULL, 
	GuidanceConsellorID INT(11) NULL,
	CONSTRAINT PF_Ffsa_Marketing
		PRIMARY KEY (ID),
	CONSTRAINT FK_Marketing_GuidanceConsellor
		FOREIGN KEY (GuidanceConsellorID)
		REFERENCES MarketingMediaGuidanceConsellor(ID)
);

CREATE TABLE IF NOT EXISTS `Fees`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Amount INT(11) NOT NULL, 
	Description VARCHAR(100) NOT NULL,
	CONSTRAINT PF_Ffsa_Fees
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `CourseDurationType` 
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(100) NOT NULL,
	CONSTRAINT PF_Ffsa_CourseDurationType	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `CourseCertificate`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(100) NOT NULL, 
	CONSTRAINT PF_Ffsa_CourseCertificate	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `CourseSchedule`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(100) NOT NULL, 
	CONSTRAINT PF_Ffsa_CourseSchedule	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `CourseDuration` 
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(100) NOT NULL, 
	CONSTRAINT PF_Ffsa_CourseDuration	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `CourseSyllabus` 
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(5000) NOT NULL, 
	CONSTRAINT PF_Ffsa_CourseSyllabus	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `CourseTechnicalSample`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(2000) NOT NULL, 
	CONSTRAINT PF_Ffsa_CourseTechnicalSample	
		PRIMARY KEY (ID)
);


CREATE TABLE IF NOT EXISTS `Course`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT,
	Name VARCHAR(100) NOT NULL,
	CourseDurationTypeID INT(11) NULL, 
	CertificateTypeID INT(11) NULL, 
	CourseDurationID INT(11) NULL, 
	FeesID INT(11) NULL, 
	CourseScheduleID INT(11) NULL, 
	CourseSyllabusID INT(11) NULL, 
	CourseTechnicalSampleID INT(11) NULL, 
	CONSTRAINT PF_Ffsa_Course	
		PRIMARY KEY (ID),
	CONSTRAINT FK_Course_CourseDurationType
		FOREIGN KEY (CourseDurationTypeID)
		REFERENCES CourseDurationType(ID),
	CONSTRAINT FK_Course_CertificateType
		FOREIGN KEY (CertificateTypeID)
		REFERENCES CertificateType(ID),
	CONSTRAINT FK_Course_CourseDuration
		FOREIGN KEY (CourseDurationID)
		REFERENCES CourseDuration(ID),
	CONSTRAINT FK_Course_Fees
		FOREIGN KEY (FeesID)
		REFERENCES Fees(ID),
	CONSTRAINT FK_Course_CourseSchedule
		FOREIGN KEY (CourseScheduleID)
		REFERENCES CourseSchedule(ID),
	CONSTRAINT FK_Course_CourseSyllabus
		FOREIGN KEY (CourseSyllabusID)
		REFERENCES CourseSyllabus(ID),
	CONSTRAINT FK_Course_CourseTechnicalSample
		FOREIGN KEY (CourseTechnicalSampleID)
		REFERENCES CourseTechnicalSample(ID)
);

CREATE TABLE IF NOT EXISTS `ParentOrGuardianDetails` 
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Relationship VARCHAR(50) NOT NULL, 
	IDNumber INT(11) NULL, 
	ResidentialAddressID INT(11) NULL,  
	PostalAddressID INT(11) NULL,  
	TelWork VARCHAR(25) NULL, 
	TelHome VARCHAR(25) NULL, 
	Cell VARCHAR(25) NULL, 
	Email VARCHAR(100) NULL, 
	CONSTRAINT PF_Ffsa_ParentOrGuardianDetails	
		PRIMARY KEY (ID),
	CONSTRAINT FK_ParentOrGuardianDetails_PostalAddress
		FOREIGN KEY (PostalAddressID)
		REFERENCES Address(ID),
	CONSTRAINT FK_ParentOrGuardianDetails_ResidentialAddress
		FOREIGN KEY (ResidentialAddressID)
		REFERENCES Address(ID)
);

CREATE TABLE IF NOT EXISTS `HighSchoolSeniorCertificate` 
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(100) NOT NULL, 
	CONSTRAINT PF_Ffsa_HighSchoolSeniorCertificate	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `HighSchoolRecord`
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	LasHighSchoolAttended VARCHAR(100) NULL,
	Year INT(11) NULL,
	Country VARCHAR(50) NULL, 
	Aggregate VARCHAR(50) NULL,
	HighSchoolSeniorCertificateID INT(11) NULL,
	CONSTRAINT PF_Ffsa_HighSchoolRecord	
		PRIMARY KEY (ID),
	CONSTRAINT FK_HighSchoolRecord_HighSchoolSeniorCertificate
		FOREIGN KEY (HighSchoolSeniorCertificateID)
		REFERENCES HighSchoolSeniorCertificate(ID)
);

CREATE TABLE IF NOT EXISTS `Boolean`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	Description VARCHAR(10) NOT NULL, 
	CONSTRAINT PF_Ffsa_Boolean	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `TertiaryYearRecord` 
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	QualificationDescription VARCHAR(100) NULL,
	Institution VARCHAR(50) NULL, 
	TotalCredits INT(11) NULL,
	YearsOfStudy INT(11) NULL,
	CompletedID INT(11) NULL,
	CONSTRAINT PF_Ffsa_TertiaryYearRecord	
		PRIMARY KEY (ID),
	CONSTRAINT FK_TertiaryYearRecord_Completed
		FOREIGN KEY (CompletedID)
		REFERENCES Boolean(ID)
);

CREATE TABLE IF NOT EXISTS `TertiaryStudyRecord` 
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	TertiaryYear1RecordID INT(11) NULL,
	TertiaryYear2RecordID INT(11) NULL,
	TertiaryYear3RecordID INT(11) NULL,
	CONSTRAINT PF_Ffsa_TertiaryYearRecord	
		PRIMARY KEY (ID),
	CONSTRAINT FK_TertiaryYearRecord_TertiaryYear1Record
		FOREIGN KEY (TertiaryYear1RecordID)
		REFERENCES TertiaryYearRecord(ID),
	CONSTRAINT FK_TertiaryYearRecord_TertiaryYear2Record
		FOREIGN KEY (TertiaryYear2RecordID)
		REFERENCES TertiaryYearRecord(ID),
	CONSTRAINT FK_TertiaryYearRecord_TertiaryYear3Record
		FOREIGN KEY (TertiaryYear3RecordID)
		REFERENCES TertiaryYearRecord(ID)
);

CREATE TABLE IF NOT EXISTS `AcademicHistory`
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	HighSchoolRecordID INT(11) NULL,
	TertiaryStudyRecordID INT(11) NULL,
	CONSTRAINT PF_Ffsa_AcademicHistory	
		PRIMARY KEY (ID),
	CONSTRAINT FK_AcademicHistory_HighSchoolRecord
		FOREIGN KEY (HighSchoolRecordID)
		REFERENCES HighSchoolRecord(ID),
	CONSTRAINT FK_AcademicHistory_TertiaryStudyRecord
		FOREIGN KEY (TertiaryStudyRecordID)
		REFERENCES TertiaryStudyRecord(ID)
);

CREATE TABLE IF NOT EXISTS `Signature`
( 
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	SignatureInitials VARCHAR(30) NOT NULL,
	Date VARCHAR(30) NOT NULL,	
	CONSTRAINT PF_Ffsa_Signature	
		PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `ApplicantDeclaration`
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	FullName VARCHAR(100) NULL,
	IDOrPassportNumber INT(11) NOT NULL, 
	ApplicantSignatureID  INT(11) NOT NULL ,
	WitnessSignatureID  INT(11) NOT NULL ,
	CONSTRAINT PF_Ffsa_ApplicantDeclaration	
		PRIMARY KEY (ID),
	CONSTRAINT FK_ApplicantDeclaration_ApplicantSignature
		FOREIGN KEY (ApplicantSignatureID)
		REFERENCES Signature(ID),
	CONSTRAINT FK_ApplicantDeclaration_WitnessSignature
		FOREIGN KEY (WitnessSignatureID)
		REFERENCES Signature(ID)
);

CREATE TABLE IF NOT EXISTS `BenifactorDeclaration`
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	SignatureID  INT(11) NOT NULL ,
	IDNumber INT(11) NOT NULL, 
	CONSTRAINT PF_Ffsa_BenifactorDeclaration	
		PRIMARY KEY (ID),
	CONSTRAINT FK_BenifactorDeclaration_Signature
		FOREIGN KEY (SignatureID)
		REFERENCES Signature(ID)
);

CREATE TABLE IF NOT EXISTS `Declaration` 
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	ApplicantDeclarationID INT(11) NULL,
	BenifactorDeclarationID INT(11) NULL,
	CONSTRAINT PF_Ffsa_Declaration	
		PRIMARY KEY (ID),
	CONSTRAINT FK_Declaration_ApplicantDeclaration
		FOREIGN KEY (ApplicantDeclarationID)
		REFERENCES ApplicantDeclaration(ID),
	CONSTRAINT FK_Declaration_BenifactorDeclaration
		FOREIGN KEY (BenifactorDeclarationID)
		REFERENCES BenifactorDeclaration(ID)
);

CREATE TABLE IF NOT EXISTS `Application`
(
	ID INT(11) NOT NULL AUTO_INCREMENT, 
	StudentDetailsID INT(11) NULL,
	MarketingID INT(11) NULL,
	CourseID INT(11) NULL,
	ParentOrGuardianDetailsID INT(11) NULL,
	AcademicHistoryID INT(11) NULL,
	DeclarationID INT(11) NULL,
	CONSTRAINT PF_Ffsa_Application	
		PRIMARY KEY (ID),
	CONSTRAINT FK_Application_StudentDetails
		FOREIGN KEY (StudentDetailsID)
		REFERENCES StudentDetails(ID),
	CONSTRAINT FK_Application_Marketing
		FOREIGN KEY (MarketingID)
		REFERENCES Marketing(ID),
	CONSTRAINT FK_Application_Course
		FOREIGN KEY (CourseID)
		REFERENCES Course(ID),
	CONSTRAINT FK_Application_ParentOrGuardianDetails
		FOREIGN KEY (ParentOrGuardianDetailsID)
		REFERENCES ParentOrGuardianDetails(ID),
	CONSTRAINT FK_Application_AcademicHistory
		FOREIGN KEY (AcademicHistoryID)
		REFERENCES AcademicHistory(ID),
	CONSTRAINT FK_Application_Declaration
		FOREIGN KEY (DeclarationID)
		REFERENCES Declaration(ID)
);
