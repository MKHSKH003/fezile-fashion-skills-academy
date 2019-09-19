import React, { useState } from 'react';
import { Button, Wizard } from '@patternfly/react-core';

const Registration = ({
  isOpen,
  setIsOpen
}) => {
  const steps = [
    { name: 'Step 1', component: <p>Step 1</p> },
    { name: 'Step 2', component: <p>Step 2</p> },
    { name: 'Step 3', component: <p>Step 3</p> },
    { name: 'Step 4', component: <p>Step 4</p> },
    { name: 'Final Step', component: <p>Final Step</p>, hideCancelButton: true, nextButtonText: 'Save' }
  ];

  return (
    <React.Fragment>
      {isOpen && (
        <Wizard
          isOpen={isOpen}
          /*
          isFullHeight
          isFullWidth
          */
          onClose={() => setIsOpen(false)}
          title="Registration"
          description="Simple Wizard Description"
          steps={steps}
        />
      )}
    </React.Fragment>
  );
};

export default Registration;
