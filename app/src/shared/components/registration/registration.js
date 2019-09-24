import React, { useState } from "react";
import { Wizard } from "@patternfly/react-core";

import StudentDetails from "./sections/student-details/student-details"
import Marketing from "./sections/Marketing";

const Registration = ({
  userSession,
  setUserSession
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
    { name: 'Course', component: <p>Course</p> },
    { name: 'Parent / Guardian Details', component: <p>Parent / Guardian Details</p> },
    { name: 'Academic History', component: <p>Academic History</p> },
    { name: 'Declaration', component: <p>Declaration</p>, hideCancelButton: true, nextButtonText: 'Submit'}
  ];

  return (
    <React.Fragment>
        <Wizard
          isOpen={true}
          onSave={ ()=> console.log('submitting...', marketingDetails) } 
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
