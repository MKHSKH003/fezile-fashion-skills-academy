CREATE TABLE IF NOT EXISTS `targeton_Ffsa`.`User` 
(
	 `ID` INT(11) NOT NULL AUTO_INCREMENT ,
	 `FirstName` VARCHAR(50) NOT NULL , 
	 `LastName` VARCHAR(50) NOT NULL , 
	 `Email` VARCHAR(50) NOT NULL , 
	 `Password` VARCHAR(100) NOT NULL ,
	  PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`StudentDetails` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Surname` VARCHAR(50) NOT NULL , 
	`FirstNames` VARCHAR(50) NOT NULL , 
	`IDNumber` INT(11) NULL , 
	`ResidentialAddress` VARCHAR(100) NULL , 
	`PostalAddress` VARCHAR(100) NULL , 
	`TelWork` VARCHAR(25) NULL , 
	`TelHome` VARCHAR(25) NULL , 
	`Cell` VARCHAR(25) NULL , 
	`Fax` VARCHAR(25) NULL , 
	`Email` VARCHAR(100) NULL , 
	`Title` VARCHAR(10) NULL , 
	`Race` VARCHAR(20) NULL ,
	`OtherRace` VARCHAR(50) NULL , 
	`Gander` VARCHAR(20) NULL , 
	`DisabilitiesOrMedicalConditionAffectStudies` VARCHAR(10) NULL , 
	`NatureOfDisabilityOrMedicalCondition` VARCHAR(100) NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`Media` 
( 
	`ID` INT NOT NULL AUTO_INCREMENT , 
	`Description` INT NOT NULL , 
	PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`Marketing` 
( 
	`ID` INT NOT NULL AUTO_INCREMENT , 
	`Name` VARCHAR(50) NOT NULL , 
	`FormOfMediaID` INT(11) NOT NULL , 
	 PRIMARY KEY (`ID`), 
	 INDEX `FK_Marketing_Media` (`FormOfMediaID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`Fees` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Amount` INT(11) NOT NULL , 
	`Description` VARCHAR(00) NOT NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`CourseDurationType` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Description` VARCHAR(100) NOT NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`CertificateType` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Description` VARCHAR(100) NOT NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`CourseSchedule` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Description` VARCHAR(100) NOT NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`CourseDuration` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Description` VARCHAR(100) NOT NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`CourseSyllabus` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Description` VARCHAR(5000) NOT NULL , 
	 PRIMARY KEY (`ID`)
);

CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`CourseTechnicalSample` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT , 
	`Description` VARCHAR(2000) NOT NULL , 
	 PRIMARY KEY (`ID`)
);


CREATE TABLE IF NOT EXISTS `targeton_Ffsa_Dev`.`Course` 
( 
	`ID` INT(11) NOT NULL AUTO_INCREMENT ,
	`Name` VARCHAR(100) NOT NULL ,
	`CourseDurationTypeID` INT(11) NULL , 
	`CertificateTypeID` INT(11) NULL , 
	`CourseDurationID` INT(11) NULL , 
	`FeesID` INT(11) NULL , 
	`CourseScheduleID` INT(11) NULL , 
	`CourseSyllabusID` INT(11) NULL , 
	`CourseTechnicalSampleID` INT(11) NULL , 
	 PRIMARY KEY (`ID`)
);
