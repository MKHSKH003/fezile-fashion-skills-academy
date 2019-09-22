import React, { useState } from "react";
import { Button, Wizard } from "@patternfly/react-core";

import StudentDetails from "./sections/studentDetails.js";

const Registration = ({
  userSession,
  setUserSession
}) => {
  const [formDetails, setFormDetails] = useState({
    studentDetails: {
      surname: '',
      firstnames: '',
      idNumber: '',
      residentialAddress: '',
      title: '',
      Race: '',
      gender: '',
      postalCode: '',
      postalAddress: '',
      telWork: '',
      telHome: '',
      cell: '',
      Email: '',
      disabilitiesOrMedicalConditions: '',
      infoOnDisabilitiesOrMedicalConditions: ''
    }
  })
  const steps = [
    { name: 'Student Details', component: <StudentDetails /> },
    { name: 'Step 2', component: <p>Step 2</p> },
    { name: 'Step 3', component: <p>Step 3</p> },
    { name: 'Step 4', component: <p>Step 4</p> },
    { name: 'Final Step', component: <p>Final Step</p>, hideCancelButton: true, nextButtonText: 'Save' }
  ];

  return (
    <React.Fragment>
        <Wizard
          isOpen={true}
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
