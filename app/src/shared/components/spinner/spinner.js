import './spinner.css'

import React from 'react';

import LoadingOverlay from 'react-loading-overlay';

export const Spinner = ({
    isLoading,
    children
}) => (
        <LoadingOverlay
            active={isLoading}
            spinner
            text={"In progresss..."}
        >
            {children}
        </LoadingOverlay>
    )

export default Spinner;