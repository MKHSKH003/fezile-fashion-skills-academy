import React from 'react';

import { TextField } from '@material-ui/core';

const AcademicHistoryTextField = ({
    field,
    field1,
    field2,
    placeholder,
    helperText,
    type,
    objectDetails,
    setObjectDetails
}) => (
        <TextField
            type={type}
            placeholder={placeholder}
            helperText={helperText}
            fullWidth={true}
            value={objectDetails[field][field1][field2]}
            onChange={event => setObjectDetails({
                ...objectDetails,
                [field]: {
                    ...objectDetails[field],
                   [field1]: {
                       ...objectDetails[field][field1],
                       [field2]: event.target.value
                   }
                }
            })}
            margin={'normal'}
        />
    );

    export default AcademicHistoryTextField;