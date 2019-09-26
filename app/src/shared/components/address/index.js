import React from 'react';
import { TextField } from '@material-ui/core';

const CustomeTextField = ({
    label,
    placeholder,
    helperText,
    field,
    type,
    objectDetails,
    setObjectDetails
}) => (
        <TextField
            id={label}
            type={type}
            placeholder={placeholder}
            value={objectDetails[field][label]}
            onChange={event => setObjectDetails({
                ...objectDetails,
                [field]: {
                    ...objectDetails[field],
                    [label]: event.target.value
                }
            })}
            fullWidth={true} 
            margin={'normal'}
            helperText={helperText}
        />
    )
const Address = ({
    helperText,
    field,
    objectDetails,
    setObjectDetails
}) => {

    return (
        <>
            <CustomeTextField
                label={'line1'}
                type="text"
                placeholder={"Line 1"}
                helperText={helperText}
                field={field}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <CustomeTextField
                label={'line2'}
                type="text"
                placeholder={"Line 2"}
                helperText={helperText}
                field={field}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <CustomeTextField
                label={'line3'}
                type="text"
                placeholder={"Line 3"}
                helperText={helperText}
                field={field}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <CustomeTextField
                label={'postalCode'}
                type="number"
                placeholder={"Postal Code"}
                helperText={helperText}
                field={field}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
        </>
    )
}

export default Address;