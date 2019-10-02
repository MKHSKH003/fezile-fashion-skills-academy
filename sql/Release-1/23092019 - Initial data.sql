#--------------- INSERT INTO Marketing Media ---------------#

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Exhibition') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Exhibition'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Newspaper') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Newspaper'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Internet(Website)') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Internet(Website)'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Friends') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Friends'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Family/Parents') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Family/Parents'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Posters') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Posters'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'School Visit') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'School Visit'
);

INSERT INTO `MarketingMedia` (`Description`)
SELECT * FROM (SELECT 'Guidance Consellor') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `MarketingMedia` 
    WHERE `Description` = 'Guidance Consellor'
);


#--------------- INSERT INTO Fees ---------------#

INSERT INTO `Fees` (`Amount`, `Description`)
SELECT * FROM (SELECT '38600', 'R18 700 (Year 1). 7% discount is issued if fees are paid upfront in full. 5% discount is issued if full fees are paid by June, R19 900 (Year 2 ). 7% discount is issued if fees are paid upfront in full. 5% discount is issued if full fees are paid by June.') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Fees` 
    WHERE `Amount` = '38600' AND `Description` = 'R18 700 (Year 1). 7% discount is issued if fees are paid upfront in full. 5% discount is issued if full fees are paid by June, R19 900 (Year 2 ). 7% discount is issued if fees are paid upfront in full. 5% discount is issued if full fees are paid by June.'
);

INSERT INTO `Fees` (`Amount`, `Description`)
SELECT * FROM (SELECT '11700', 'R11 700. 7% discount is issued if fees are paid upfront in full, 5% discount is issued if full fees are paid by June.') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Fees` 
    WHERE `Amount` = '11700' AND `Description` = 'R11 700. 7% discount is issued if fees are paid upfront in full, 5% discount is issued if full fees are paid by June.'
);

INSERT INTO `Fees` (`Amount`, `Description`)
SELECT * FROM (SELECT '3800', 'R3800 ( incl. reg fees of R1 900).') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Fees` 
    WHERE `Amount` = '3800' AND `Description` = 'R3800 ( incl. reg fees of R1 900).'
);


#--------------- INSERT INTO Course Duration Type ---------------#

INSERT INTO `CourseDurationType` (`Description`)
SELECT * FROM (SELECT 'Full time') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseDurationType` 
    WHERE `Description` = 'Full time'
);

INSERT INTO `CourseDurationType` (`Description`)
SELECT * FROM (SELECT 'Short') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseDurationType` 
    WHERE `Description` = 'Short'
);


#--------------- INSERT INTO Course Certificate ---------------#

INSERT INTO `CourseCertificate` (`Description`)
SELECT * FROM (SELECT 'Skills programme certificate') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseCertificate` 
    WHERE `Description` = 'Skills programme certificate'
);

INSERT INTO `CourseCertificate` (`Description`)
SELECT * FROM (SELECT 'National certificate') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseCertificate` 
    WHERE `Description` = 'National certificate'
);


#--------------- INSERT INTO Course Schedule ---------------#

INSERT INTO `CourseSchedule` (`Description`)
SELECT * FROM (SELECT 'Monday- Thurs 8am-4pm & Friday 8am-12pm') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSchedule` 
    WHERE `Description` = 'Monday- Thurs 8am-4pm & Friday 8am-12pm'
);

INSERT INTO `CourseSchedule` (`Description`)
SELECT * FROM (SELECT 'Saturdays only 8am-12pm |  12pm-4pm') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSchedule` 
    WHERE `Description` = 'Saturdays only 8am-12pm |  12pm-4pm'
);


#--------------- INSERT INTO CourseDuration ---------------#

INSERT INTO `CourseDuration` (`Description`)
SELECT * FROM (SELECT '1 Year') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseDuration` 
    WHERE `Description` = '1 Year'
);

INSERT INTO `CourseDuration` (`Description`)
SELECT * FROM (SELECT '2 Years') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseDuration` 
    WHERE `Description` = '2 Years'
);

INSERT INTO `CourseDuration` (`Description`)
SELECT * FROM (SELECT '12 Weeks') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseDuration` 
    WHERE `Description` = '12 Weeks'
);


#--------------- INSERT INTO CourseSyllabus ---------------#

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY  SHORT COURSE.
	Machine theory.
	Terminology and visual knowledge of threading a single needle lockstitch machine and or over locker
	(demonstration by mentor).
	General rules for machine care.
	Variants of machines in the industry and sewing equipment and attachments used for this program.
	Stitch types.
	Definition and relevance to the apparel industry.
	Classification of Stitches.
	Seams.
	Definition and purpose.
	Procedure and variations of seams.
	Techniques (Demonstration by mentor).
	Interlining, lining, facings.
	Technical sampling and Seam samples.
	Closure samples and Variations of hemming. 
	Procedures and functions of pressing.
	Garment replication exercises.
	Placing, rating and cutting of fabric correctly.
	Bodice with a single style incorporated.
	Skirt with functional pockets and closure.
	Dress with darts and short sleeves.
	Rating, Placing, Cutting, Quality and Labelling.
	Production Theory such as commonly used machinery in Bridal construction.
	Systematically know the correct method of needle thread path on a single lock stitch machine with sound.
	knowledge on bobbin case bobbin winding, threading and insertion into horizontal shaft.
	Stitch types and their classification.
	Garment replication techniques.
	Rating of patterns in relation to design.
	Theory and Thread Path.
	Interlining & Interfacing.
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY  SHORT COURSE%'
);

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	BRIDAL PATTERN TECHNOLOGY SHORT COURSE.
	Bridal Pattern Theory: Definition and Terminology. 
	Brief History and principles of pattern design in bridal. 
	Textiles (Authentic and Synthetics in relation to grain variation).
	Figure Assessment and Measurements.
	Tools Pattern Design Equipment.
	Importance of a grain and identifying the grain on fabric and Analysis of silhouettes.
	Factors such as fabric quality, shape and line. 
	Bridal Garment finishing’s, facings, linings and interlinings. 
	Dart positionings, style lines and variations. 
	Implementation of calculations for Basic Blocks into corset blocks. 
	Half Scale Blocks and Seam allowance variations and functions.
	Placing and rating of fabric, Marking of pattern pieces.
	Pinning and cutting of fabric and Basic pockets.
	Female Block drafting for the Corset styles, various Bridal Skirts, Wedding Dress and finishes.
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%BRIDAL PATTERN TECHNOLOGY SHORT COURSE%'
);

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE.
	Machine theory.
	Terminology and visual knowledge of threading a single needle lockstitch machine and or over locker.
	(demonstration by mentor).
	General rules for machine care.
	Variants of machines in the industry and sewing equipment and attachments used for this program.
	Stitch types.
	Definition and relevance to the apparel industry.
	Classification of Stitches.
	Seams.
	Definition and purpose. 
	Procedure and variations of seams.
	Techniques (Demonstration by mentor.
	Interlining, lining, facings.
	Technical sampling and Seam samples. 
	Closure samples and Variations of hemming.
	Theory and Thread Path.
	Procedures and functions of pressing. 
	Garment replication exercises.
	Placing, rating and cutting of fabric correctly.
	Bodice with a single style incorporated. 
	Skirt with functional pockets and closure. 
	Dress with darts and short sleeves.
	Rating, Placing, Cutting, Quality and Labelling.
	Production Theory such as commonly used machinery in apparel production.
	Systematically know the correct method of needle thread path on a single lock stitch machine with sound.
	knowledge on bobbin case bobbin winding, threading and insertion into horizontal shaft.
	Stitch types and their classification.
	Garment replication techniques.
	Rating of patterns in relation to design.
	Interlining & Interfacing.
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE%'
);

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	ADVANCED PATTERN SKILLS AND DESIGN  SHORT COURSE.
	Garment finishing’s, facings, linings and interlinings. 
	Dart positionings, style lines and variations. 
	Implementation of calculations for Basic Blocks.
	Half Scale Blocks and Seam allowance variations and functions.
	Placing and rating of fabric, Marking of pattern pieces.
	Pinning and cutting of fabric and Basic pockets.
	Female Block drafting for the Bodice, Skirt, Dress and Basic Sleeve.
	Mock up.
	Pattern Theory: Definition and Terminology. 
	Brief History and principles of pattern design.
	Textiles (Authentic and Synthetics in relation to grain variation).
	Figure Assessment and Measurements.
	Tools Pattern Design Equipment.
	Importance of a grain and identifying the grain on fabric and Analysis of silhouettes.
	Factors such as fabric quality, shape and line.
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%ADVANCED PATTERN SKILLS AND DESIGN  SHORT COURSE%'
);

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	APPLIED DESIGN SHORT COURSE.
	Costing.
	Range Build.
	Marketing.
	SETA Business Modules.
	Pattern Plan.
	Garment Mock up.
	Fabric Orientation.
	Quality.  
	Creative Direction. 
	Product Categories 
	Design (Technical Drawings, Tech Specs, Storyboards, Spec Sheets, Mood Boards and Pin Boards). 
	Fashion History. 
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%APPLIED DESIGN SHORT COURSE%'
);

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	CLOTHING TECHNOLOGY AND ENTREPRENEURSHIP- FULL TIME COURSE.
	Design Aesthetics.
	Fashion History.
	Textiles 101.
	Clothing Technology.
	Entrepreneurial Studies.
	Lifestyle Studies.
	Community Engagement.
	Creative Output-Design Collection for Fashion Week/s (end of year 1).
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%CLOTHING TECHNOLOGY AND ENTREPRENEURSHIP- FULL TIME COURSE%'
);

INSERT INTO `CourseSyllabus` (`Description`)
SELECT * FROM (SELECT '
	CLOTHING DESIGN DEVELOPMENT, ENTREPRENEURSHIP & RETAIL.
	Design Aesthetics.
	Clothing Technology.
	Fashion Merchandising, Marketing and Media.
	Fashion Retail Management.
	Entrepreneurial Studies.
	Lifestyle Studies.
	Community Engagement.
	Fashion Value Chain Link-Fashion and Textile Design.
	Fashion Value Chain Link-Fashion Retail.
	Fashion Value Chain Link-Manufacturing and Distribution.
	Work Integrated Learning/In Service Training.
	Creative Output-Design Collection for Fashion Week/s (end of year 2).
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseSyllabus` 
    WHERE `Description` like '%CLOTHING DESIGN DEVELOPMENT, ENTREPRENEURSHIP & RETAIL%'
);


#--------------- INSERT INTO Course Technical Sample ---------------#

INSERT INTO `CourseTechnicalSample` (`Description`)
SELECT * FROM (SELECT '
	ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY  SHORT COURSE.
	(Collars) shirt collar/ Roll collar/ Collar with lapel.
	Pocket (in seam pocket, Below patch pocket.
	Pleats.
	Variations of Closures and hems.
	Minimum of 3 garments.
	Fabric manipulation techniques such as pleats and tucks.
	Sleeve variations.
	Styled panel line.
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseTechnicalSample` 
    WHERE `Description` like '%ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY  SHORT COURSE.%'
);

INSERT INTO `CourseTechnicalSample` (`Description`)
SELECT * FROM (SELECT '
	BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE.
	Various Bridal Gowns, Evening, Resort and Cocktail suitable to current trend.
	Variations of Closures and hems.
	Minimum of 3 garments.
	Fabric manipulation techniques such as pleats and tucks.
	Styled panel lines.
') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `CourseTechnicalSample` 
    WHERE `Description` like '%BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE%'
);


#--------------- INSERT INTO Course ---------------#

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'CLOTHING DESIGN DEVELOPMENT, ENTREPRENEURSHIP & RETAIL','1','2','1' AS 'CourseDurationID','2' AS 'FeesID','1' AS 'CourseScheduleID','7',NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'CLOTHING DESIGN DEVELOPMENT, ENTREPRENEURSHIP & RETAIL'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'CLOTHING TECHNOLOGY AND ENTREPRENEURSHIP- FULL TIME COURSE','1','2','2' AS 'CourseDurationID','1' AS 'FeesID','1' AS 'CourseScheduleID','6',NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'CLOTHING TECHNOLOGY AND ENTREPRENEURSHIP- FULL TIME COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'APPLIED DESIGN SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID','7',5) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'APPLIED DESIGN SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'APPLIED DESIGN SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID','5',NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'APPLIED DESIGN SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'BASIC PATTERN SKILLS AND DESIGN SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID', NULL AS 'CourseSyllabusID',NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'BASIC PATTERN SKILLS AND DESIGN SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'ADVANCED PATTERN SKILLS AND DESIGN SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID', 4,NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'ADVANCED PATTERN SKILLS AND DESIGN SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'BASIC GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID', NULL AS 'CourseSyllabusID',NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'BASIC GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID', '3', '1' AS 'CourseTechnicalSampleID') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'BRIDAL PATTERN TECHNOLOGY SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID', '2' AS 'CourseSyllabusID', NULL) as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'BRIDAL PATTERN TECHNOLOGY SHORT COURSE'
);

INSERT INTO `Course`(`Name`, `CourseDurationTypeID`, `CertificateTypeID`, `CourseDurationID`, `FeesID`, `CourseScheduleID`, `CourseSyllabusID`, `CourseTechnicalSampleID`)
SELECT * FROM (SELECT 'BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE','2','1','3' AS 'CourseDurationID','3' AS 'FeesID','2' AS 'CourseScheduleID', '1' AS 'CourseSyllabusID', '2' AS 'CourseTechnicalSampleID') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `Course` 
    WHERE `Name` = 'BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE'
);


#--------------- INSERT INTO High School Senior Certificate ---------------#

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Full Exeption') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Full Exeption'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Ordinary Conditional Exemption Mature') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Ordinary Conditional Exemption Mature'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Age Conditional Exemption') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Age Conditional Exemption'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Grade 11 final') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Grade 11 final'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Grade 11 mid-final') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Grade 11 mid-final'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Grade 12 final') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Grade 12 final'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Previous Qualification') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Previous Qualification'
);

INSERT INTO `HighSchoolSeniorCertificate` (`Description`)
SELECT * FROM (SELECT 'Recognition of Prior Learning (RPL)') as temp
WHERE NOT EXISTS(
    SELECT 1
    FROM `HighSchoolSeniorCertificate` 
    WHERE `Description` = 'Recognition of Prior Learning (RPL)'
);