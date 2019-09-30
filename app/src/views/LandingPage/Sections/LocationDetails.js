import "index.css";

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        //boxShadow: 'none'
    },
    formControlLabel: {
        display: "flex !important" ,
        'justify-content': 'space-evenly'
    }
}));

const CustomControlLabel = ({
    icon,
    label
}) =>
    <FormControlLabel
        className={'formControlLabel'}
        control={<Icon className={icon} color="primary" />}
        label={label}
    />

const LocationDetails = () => {
    const classes = useStyles();
 
    return (
        <div className={classes.root}>    
            <Grid container spacing={3} >
                <Grid item xs={12} sm={4} md={4} >
                    <Paper className={classes.paper}>
                        <Grid  >
                            <CustomControlLabel
                                icon={'fa fa-envelope'}
                                label={"admin@ffsaza.co.za"}
                            />
                        </Grid>
                        <Grid >
                            <CustomControlLabel 
                                icon={'fa fa-phone'} 
                                label={"031-100-0141 Cell& What’s app: 0670658662"}
                            />
                        </Grid>
                        <Grid >
                            <CustomControlLabel 
                                icon={'fa fa-home'} 
                                label={"272 Savannah Park Unit 10 16th Road Randjies Park Midrand Gauteng 1685"}
                            />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8} md={8} >
                    <Paper className={classes.paper}>
                        Maps
                    </Paper>
                </Grid>
            </Grid>
        </div>)
}
export default LocationDetails;

