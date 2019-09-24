import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const Address = ({
    helperText
}) => {
    const [address, setAddress] = useState({
          line1: '',
          line2: '',
          line3: '',
          postalCode: ''
    });

    return (
        <>
            <TextField
                id="line1"
                type="text"
                placeholder={"Line 1"}
                fullWidth={true} margin={'normal'}
                helperText={helperText}
            />
            <TextField
                id="line2"
                type="text"
                placeholder={"Line 2"}
                fullWidth={true} margin={'normal'}
                helperText={helperText}
            />
            <TextField
                id="line3"
                type="text"
                placeholder={"Line 3"}
                fullWidth={true} margin={'normal'}
                helperText={helperText}
            />
            <TextField
                id="postalCode"
                type="number"
                placeholder={"Postal Code"}
                fullWidth={true} margin={'normal'}
                helperText={helperText}
            />
        </>
    )
}

export default Address;