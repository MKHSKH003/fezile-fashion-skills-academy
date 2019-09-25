import React from 'react';

import { TextField } from '@material-ui/core';

const AcademicHistoryTextField = ({
    field,
    placeholder,
    helperText,
    type,
    label,
    objectDetails,
    setObjectDetails
}) => (
        <TextField
            type={type}
            placeholder={placeholder}
            helperText={helperText}
            fullWidth={true}
            value={objectDetails[field][label]}
            onChange={event => setObjectDetails({
                ...objectDetails,
                [field]: {
                    ...objectDetails[field],
                   [label]: event.target.value
                }
            })}
            margin={'normal'}
        />
    );

    export default AcademicHistoryTextField;