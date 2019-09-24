import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Address from 'shared/components/address/';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none'
    },
    formControl: {
        margin: theme.spacing(0.5),
        flexWrap: 'wrap',
        display: 'flex'

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();
    
    const [studentDetails, setStudentDetails] = useState({
          surname: '',
          firstnames: '',
          idNumber: '',
          residentialAddress: {},
          postalAddress: {},
          telWork: '',
          telHome: '',
          cell: '',
          fax: '',
          Email: '',
          title: '',
          race: '',
          otherRace: '',
          gender: '',
          disabilitiesOrMedicalConditionAffectStudies: 0,
          natureOfDisabilityOrMedicalCondition: ''
      })

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TextField id="Surname" type="text" placeholder={"Surname"} fullWidth={true} margin={'normal'} />
                        <TextField id="firstNames" type="text" placeholder={"First Names"} fullWidth={true} margin={'normal'} />
                        <TextField id="id" type="number" placeholder={"ID Number"} fullWidth={true} margin={'normal'} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="title" >Title</InputLabel>
                            <Select
                                native
                                autoWidth
                                labelWidth={2}
                                // value={state.age}
                                // onChange={handleChange('age')}
                                inputProps={{
                                    name: 'Title',
                                    id: 'title',
                                }}
                            >
                                <option value="" />
                                <option value={'Mr'}>Mr</option>
                                <option value={'Mrs'}>Mrs</option>
                                
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="race" >Race</InputLabel>
                            <Select
                                native
                                autoWidth
                                labelWidth={2}
                                // value={state.age}
                                // onChange={handleChange('age')}
                                inputProps={{
                                    name: 'race',
                                    id: 'race',
                                }}
                            >
                                <option value="" />
                                <option value={'black'}>Black</option>
                                <option value={'White'}>White</option>
                                <option value={'coloured'}>Coloured</option>
                                <option value={'Other'}>Other</option>
                                
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="gender" >Gender</InputLabel>
                            <Select
                                native
                                autoWidth
                                labelWidth={2}
                                // value={state.age}
                                // onChange={handleChange('age')}
                                inputProps={{
                                    name: 'gender',
                                    id: 'gender',
                                }}
                            >
                                <option value="" />
                                <option value={'male'}>Male</option>
                                <option value={'female'}>Female</option>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Address helperText={'Student residential address (Street) for the duration.'}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Address helperText={'Student postal address (Street) if different.'}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TextField id="telWork" type="text" placeholder={"Tel (W)"} fullWidth={true} margin={'normal'} />
                        <TextField id="telHome" type="text" placeholder={"Tel (H)"} fullWidth={true} margin={'normal'} />
                        <TextField id="cell" type="text" placeholder={"Cell"} fullWidth={true} margin={'normal'} />
                        <TextField id="fax" type="text" placeholder={"Fax"} fullWidth={true} margin={'normal'} />
                        <TextField id="email" type="text" placeholder={"Email"} fullWidth={true} margin={'normal'} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="disabilities/medical conditions" >Do you have disabilities / medical conditions</InputLabel>
                            <Select
                                native
                                autoWidth
                                labelWidth={2}
                                value={studentDetails.disabilitiesOrMedicalConditionAffectStudies}
                                onChange={ event => setStudentDetails({
                                    ...studentDetails,
                                    disabilitiesOrMedicalConditionAffectStudies: event.target.value
                                })}
                            >
                                <option value="" />
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                                
                            </Select>
                            {setStudentDetails.disabilitiesOrMedicalConditionAffectStudies === 1 &&
                                <TextField 
                                    id="natureOfDisabilityOrCondition" 
                                    type="text" 
                                    placeholder={"Nature of the disability or condition"}
                                    fullWidth={true} margin={'normal'} 
                                    helperText={"State the nature of the disability or condition"}
                                />
                            }
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <Paper className={classes.paper}>
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={() => console.log('setStudentDetails', setStudentDetails)}
                        > Save
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}