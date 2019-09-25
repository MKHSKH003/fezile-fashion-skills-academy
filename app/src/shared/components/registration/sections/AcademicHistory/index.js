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
import CustomTextField from '../shared/components/Academic-history-text-field';
import ThreeDTextField from '../shared/components/3D-text-field';

const highSchoolSeniorCertificates = [
    "",
    "Full Exeption",
    "Ordinary Conditional Exemption Mature",
    "Age Conditional Exemption",
    "Grade 11 final",
    "Grade 11 mid-final",
    "Grade 12 final",
    "Previous Qualification",
    "Recognition of Prior Learning (RPL)"
]

const AcademicHistory = ({
    academicHistory,
    setAcademicHistory
}) => {
    const classes = useStyles();
    const [extras, setExtras] = useState({
        race: ''
    })
    /*
    highSchoolRecord: {
        lastHighSchoolAttended: '',
        year: '',
        country: '',
        aggregate: '',
        highSchoolSeniorCertificateId: ''
      },

    tertiaryYear1Record: {
        qualificationDescription: '',
        institution: '',
        totalCredits: '',
        yearsOfStudy: '',
        completedId: ''
    },
    */
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <CustomTextField
                            type="text"
                            field={'highSchoolRecord'}
                            label={'lastHighSchoolAttended'}
                            value={academicHistory.highSchoolRecord.lastHighSchoolAttended}
                            placeholder={"Last High School Attended"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <CustomTextField
                            type="number"
                            field={'highSchoolRecord'}
                            label={'year'}
                            placeholder={"Year"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <CustomTextField
                            type="text"
                            field={'highSchoolRecord'}
                            label={'country'}
                            placeholder={"Country"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <CustomTextField
                            type="number"
                            field={'highSchoolRecord'}
                            label={'aggregate'}
                            placeholder={"Aggregate"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <FormControlSelect
                            field={'highSchoolRecord'}
                            label={"High School Senior Certificate"}
                            options={highSchoolSeniorCertificates}
                            index={true}
                            classes={classes}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <ThreeDTextField
                            type="text"
                            field={'tertiaryStudyRecord'}
                            field1={'tertiaryYear1Record'}
                            field2={'qualificationDescription'}
                            helperText={'Tertiary Year 1 Record'}
                            placeholder={"Qualification Description"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field={'tertiaryStudyRecord'}
                            field1={'tertiaryYear1Record'}
                            field2={'institution'}
                            helperText={'Tertiary Year 1 Record'}
                            placeholder={"Institution"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field={'tertiaryStudyRecord'}
                            field1={'tertiaryYear1Record'}
                            field2={'totalCredits'}
                            helperText={'Tertiary Year 1 Record'}
                            placeholder={"Total Credits"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field={'tertiaryStudyRecord'}
                            field1={'tertiaryYear1Record'}
                            field2={'yearsOfStudy'}
                            helperText={'Tertiary Year 1 Record'}
                            placeholder={"Year Of Study"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
    
                        <FormControlSelect
                            field={'completedId'}
                            label={"Completed ?"}
                            options={["", "Yes", "No"]}
                            index={true}
                            classes={classes}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
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
                                saveStudentDetails(academicHistory)
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

export default AcademicHistory;