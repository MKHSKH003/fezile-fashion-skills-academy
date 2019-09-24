import React from 'react';
import { TextField } from '@material-ui/core';

const CustomeTextField = ({
    label,
    placeholder,
    helperText,
    field,
    type,
    studentDetails,
    setStudentDetails
}) => (
        <TextField
            id={label}
            type={type}
            placeholder={placeholder}
            onChange={event => setStudentDetails({
                ...studentDetails,
                [field]: {
                    ...studentDetails[field],
                    [label]: event.target.value
                }
            })}
            fullWidth={true} margin={'normal'}
            helperText={helperText}
        />
    )
const Address = ({
    helperText,
    field,
    studentDetails,
    setStudentDetails
}) => {

    return (
        <>
            <CustomeTextField
                label={'line1'}
                type="text"
                placeholder={"Line 1"}
                helperText={helperText}
                field={field}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
            />
            <CustomeTextField
                label={'line2'}
                type="text"
                placeholder={"Line 2"}
                helperText={helperText}
                field={field}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
            />
            <CustomeTextField
                label={'line3'}
                type="text"
                placeholder={"Line 3"}
                helperText={helperText}
                field={field}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
            />
            <CustomeTextField
                label={'postalCode'}
                type="number"
                placeholder={"Postal Code"}
                helperText={helperText}
                field={field}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
            />
        </>
    )
}

export default Address;