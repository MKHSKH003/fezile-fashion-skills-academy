import React, { useState } from "react";
import { Wizard } from "@patternfly/react-core";

import Steps from "./utils/registration-steps";
import applicationDetailsValidation from "./utils/validations";

const Registration = ({
  userSession,
  setUserSession,
  submitApplication
}) => {
  const [studentDetails, setStudentDetails] = useState({
    surname: userSession.user.LastName,
    firstNames: userSession.user.FirstName,
    idNumber: '9205145972085',
    residentialAddress: {
      line1: '6 Stcokey Road',
      line2: 'Kenwyn',
      line3: 'Capetown',
      postalCode: '77700'
    },
    postalAddress: {
      line1: 'Allan Gray 1 Silo',
      line2: 'V & A Waterfront',
      line3: 'Capetown',
      postalCode: '77700'
    },
    telWork: '0219094714',
    telHome: '',
    cell: '0845310089',
    fax: '',
    email: userSession.user.Email,
    title: 'Mr',
    race: 'Black',
    otherRace: '',
    gender: 'Male',
    disabilitiesOrMedicalConditionAffectStudies: 'Yes',
    natureOfDisabilityOrMedicalCondition: 'Im on a wheelchair'
  })

  const [marketingDetails, setMarketingDetails] = useState({
    marketingMediaId: '',
    marketingMedia: '',
    marketingMediaGuidanceConsellor: {
      name: '',
      Contact: ''
    }
  })

  const [course, setCourse] = useState({
    Id: '',
    Name: ''
  })

  const [parentOrGuardianDetails, setParentOrGuardianDetails] = useState({
      relationship: 'Mother',
      idNumber: '896483846264',
      telWork: '',
      telHome: '',
      cell: '0764824409',
      email: 'Bajabulile@gmail.com',
      residentialAddress: {
        line1: 'AA 827 Simelane road',
        line2: 'Umlazi Township',
        line3: 'Durban',
        postalCode: '4031'
      },
      postalAddress: {},
  })

  const [academicHistory, setAcademicHistory] = useState({
    highSchoolRecord: {
      lastHighSchoolAttended: 'Umlazi Comtech High School',
      year: '2011',
      country: 'South Africa',
      aggregate: '70',
      highSchoolSeniorCertificateId: '6',
      highSchoolSeniorCertificate: 'Grade 12 final'
    },
    tertiaryStudyRecord: {
      tertiaryYear1Record: {
        qualificationDescription: 'Bsc Computer Science',
        institution: 'University Of CapeTown',
        totalCredits: '100',
        yearsOfStudy: '4',
        completedId: '1',
        completed: 'Yes'
      },
      tertiaryYear2Record: {
        tertiaryYear1Record: {
          qualificationDescription: '',
          institution: '',
          totalCredits: '',
          yearsOfStudy: '',
          completedId: '',
          completed: ''
        },
      },
      tertiaryYear3Record: {
        tertiaryYear1Record: {
          qualificationDescription: '',
          institution: '',
          totalCredits: '',
          yearsOfStudy: '',
          completedId: '',
          completed: ''
        },
      }
    },
  })

  const [declarationDetails, setDeclarationDetails] = useState({
    applicantDeclaration: {
      fullName: 'Skhumbuzo Mkhungo',
      IdorPassportNumber: '9005145972083',
      applicantSignature: {
        signatureInitials: 'S.C',
        date: new Date().toDateString()
      },
      witnessSignature: {
        signatureInitials: 'V.F',
        date: new Date().toDateString()
      },
      parentOrGuardianDetailsSignature: {
        signatureInitials: 'B.M',
        date: new Date().toDateString()
      }
    },
    benifactorDeclaration: {
      fullName: 'Bajabulile Mkhungo',
      idNumber: '895145972083',
      signature: {
        signatureInitials: 'B.M',
        date: new Date().toDateString()
      }
    }
  })

  const closeWizard = () =>setUserSession({
    ...userSession,
    state: {
      ...userSession.state,
      registration: false
    }
  })

  return (
    <React.Fragment>
      <Wizard
        isOpen={userSession.state.registration}
        onSave={() => {
          var validationResults = applicationDetailsValidation(
            {
              studentDetails: studentDetails,
              marketing: marketingDetails,
              course: course,
              parentOrGuardianDetails: parentOrGuardianDetails,
              academicHistory: academicHistory,
              declaration: declarationDetails
          }, 
            submitApplication
          );
          if(validationResults) closeWizard();
        }}
        onClose={() => closeWizard() }
        title={"Online Registration"}
        description={"Application For Admission"}
        steps={Steps({
          studentDetails: studentDetails,
          setStudentDetails: setStudentDetails,
          marketingDetails: marketingDetails,
          setMarketingDetails: setMarketingDetails,
          course: course,
          setCourse: setCourse,
          parentOrGuardianDetails: parentOrGuardianDetails,
          setParentOrGuardianDetails: setParentOrGuardianDetails,
          academicHistory: academicHistory,
          setAcademicHistory: setAcademicHistory,
          declarationDetails: declarationDetails,
          setDeclarationDetails: setDeclarationDetails
        })}
      />
    </React.Fragment>
  );
};

export default Registration;
