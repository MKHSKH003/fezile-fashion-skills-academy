import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Address from 'shared/components/address/';
import useStyles from '../shared/utils/use-styles';
import FormControlSelect from '../shared/components/form-control-select';
import CustomTextField from '../shared/components/custom-text-field';

const ParentOrGuardianDetails = ({
    parentOrGuardianDetails,
    setParentOrGuardianDetails
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <CustomTextField
                            type="text"
                            field={'relationship'}
                            placeholder={"Relationship"}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                        <CustomTextField
                            type="number"
                            field={'idNumber'}
                            placeholder={"ID Number"}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'telWork'}
                            placeholder={"Tel Work"}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <CustomTextField
                            type="text"
                            field={'telHome'}
                            placeholder={"Tel Home"}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'cell'}
                            placeholder={"Cell"}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'email'}
                            placeholder={"Email"}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Address
                            helperText={'Residential address (Street).'}
                            field={'residentialAddress'}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Address
                            helperText={'Postal address (Street) if different.'}
                            field={'postalAddress'}
                            objectDetails={parentOrGuardianDetails}
                            setObjectDetails={setParentOrGuardianDetails}
                        />
                    </Paper>
                </Grid>
                {/*
                <Grid item xs={12} sm={12} md={12} >
                    <Paper className={classes.paper}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                saveStudentDetails(parentOrGuardianDetails)
                            }}
                        > Save
                        </Button>
                    </Paper>
                </Grid>
                */}
            </Grid>
        </div>
    );
}

export default ParentOrGuardianDetails;