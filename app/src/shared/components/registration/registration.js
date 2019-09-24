import React, { useState } from "react";
import { Button, Wizard } from "@patternfly/react-core";

import StudentDetails from "./sections/student-details"

const Registration = ({
  userSession,
  setUserSession
}) => {
  const [formDetails, setFormDetails] = useState({
    studentDetails: '',
    Marketing: '',
    Course: '',
    ParentOrGuardianDetails: '',
    AcademicHistory: '',
    Declaration: ''
  })
  const steps = [
    { name: 'Student Details', component: <StudentDetails /> },
    { name: 'Marketing', component: <p>Marketing</p> },
    { name: 'Course', component: <p>Course</p> },
    { name: 'Parent / Guardian Details', component: <p>Parent / Guardian Details</p> },
    { name: 'Academic History', component: <p>Academic History</p> },
    { name: 'Declaration', component: <p>Declaration</p>, hideCancelButton: true, nextButtonText: 'Submit' }
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
