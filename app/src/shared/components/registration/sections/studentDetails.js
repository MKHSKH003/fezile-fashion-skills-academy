import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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

    return (
        <div className={classes.root}>
            <h3>Student Details</h3>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TextField id="Surname" type="text" placeholder={"Surname"} fullWidth={true} margin={'normal'} />
                        <TextField id="firstNames" type="text" placeholder={"First Names"} fullWidth={true} margin={'normal'} />
                        <TextField id="id" type="number" placeholder={"ID Number"} fullWidth={true} margin={'normal'} />
                        <TextField 
                            id="address"
                            type="text" 
                            placeholder={"Residential Address (Street)"}
                            fullWidth={true} margin={'normal'} 
                            multiline={true}
                            helperText="Student residential address for the duration."
                        />
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
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}