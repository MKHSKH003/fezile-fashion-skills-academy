import React, { useState } from "react";
import { Wizard } from "@patternfly/react-core";

import StudentDetails from "./sections/student-details/student-details"
import Marketing from "./sections/Marketing";
import Course from "./sections/Course";
import ParentOrGuardianDetails from "./sections/ParentOrGuardianDetails";
import AcademicHistory from "./sections/AcademicHistory";
import DeclarationDetails from "./sections/DeclarationDetails";

const Registration = ({
  userSession,
  setUserSession,
  submitApplication
}) => {
  const [studentDetails, setStudentDetails] = useState({
      surname: userSession.user.LastName,
      firstNames: userSession.user.FirstName,
      idNumber: '',
      residentialAddress: {},
      postalAddress: {},
      telWork: '',
      telHome: '',
      cell: '',
      fax: '',
      email: userSession.user.Email,
      title: '',
      race: '',
      otherRace: '',
      gender: '',
      disabilitiesOrMedicalConditionAffectStudies: '',
      natureOfDisabilityOrMedicalCondition: ''
  })

  const [marketingDetails, setMarketingDetails] = useState({
      marketingMediaId: '',
      guidanceConsellorName: '',
      guidanceConsellorContact: ''
  })

  const [course, setCourse] = useState({
      courseId: ''
  })

  const [parentOrGuardianDetails, setParentOrGuardianDetails] = useState({
      relationship: '',
      idNumber: '',
      telWork: '',
      telHome: '',
      cell: '',
      email: '',
      residentialAddress: {},
      postalAddress: {},
  })

  const [academicHistory, setAcademicHistory] = useState({
      highSchoolRecord: {
        lastHighSchoolAttended: '',
        year: '',
        country: '',
        aggregate: '',
        highSchoolSeniorCertificateId: ''
      },
      tertiaryStudyRecord: {
        tertiaryYear1Record: {
          qualificationDescription: '',
          institution: '',
          totalCredits: '',
          yearsOfStudy: '',
          completedId: ''
        },
        tertiaryYear2Record: {
          tertiaryYear1Record: {
            qualificationDescription: '',
            institution: '',
            totalCredits: '',
            yearsOfStudy: '',
            completedId: ''
          },
        },
        tertiaryYear3Record: {
          tertiaryYear1Record: {
            qualificationDescription: '',
            institution: '',
            totalCredits: '',
            yearsOfStudy: '',
            completedId: ''
          },
        }
      },
  })

  const [declarationDetails, setDeclarationDetails] = useState({
    applicantDeclaration: {
      fullName: '',
      IdorPassportNumber: '',
      applicantSignature:{
        signatureInitials: '',
        date: Date.now()
      },
      witnessSignature:{
        signatureInitials: '',
        date: Date.now()
      },
      parentOrGuardianDetailsSignature:{
        signatureInitials: '',
        date: Date.now()
      }
    },
    benifactorDeclaration:{
      signature:{
        signatureInitials: '',
        date: Date.now()
      },
      idNumber: ''
    }
  })

  const steps = [
    { 
      name: 'Student Details', 
      component: 
        <StudentDetails
          studentDetails={studentDetails}
          setStudentDetails={setStudentDetails}
        /> 
    },
    { 
      name: 'Marketing', 
      component: 
        <Marketing 
          marketingDetails={marketingDetails}
          setMarketingDetails={setMarketingDetails}
        /> 
    },
    { 
      name: 'Course',
      component: 
        <Course 
          course={course}
          setCourse={setCourse}
        /> 
    },
    { 
      name: 'Parent / Guardian Details',
      component: 
        <ParentOrGuardianDetails
          parentOrGuardianDetails={parentOrGuardianDetails}
          setParentOrGuardianDetails={setParentOrGuardianDetails}
        /> 
    },
    { 
      name: 'Academic History',
      component: 
        <AcademicHistory
          academicHistory={academicHistory}
          setAcademicHistory={setAcademicHistory}
        /> 
    },
    { 
      name: 'Declaration', 
      component: 
        <DeclarationDetails
          declarationDetails={declarationDetails}
          setDeclarationDetails={setDeclarationDetails}
        />, 
      hideCancelButton: true, 
      nextButtonText: 'Submit'
    }
  ];

  return (
    <React.Fragment>
        <Wizard
          isOpen={true}
          onSave={()=> {
            submitApplication({
              studentDetails: studentDetails,
              marketing: marketingDetails,
              courseId: course,
              parentOrGuardianDetails: parentOrGuardianDetails,
              academicHistory: academicHistory,
              declaration: declarationDetails
            })
          }} 
          onClose={() => setUserSession({
              ...userSession,
              state: {
                ...userSession.state,
                registration: false
              }
          })}

          title="Online Registration"
          description="Application For Admission"
          steps={steps}
        />
    </React.Fragment>
  );
};

export default Registration;
