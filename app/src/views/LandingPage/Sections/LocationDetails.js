import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        //boxShadow: 'none'
    },
    socialIcons: {
        position: "relative",
        fontSize: "20px !important",
    },
    label: {
        margin: '0.5rem'
    }
}));

const CustomControlLabel = ({
    icon,
    label,
    classes
}) =>
        <FormControlLabel
            control={<Icon className={icon} color="primary" />}
            classes={{
                label: classes.label
            }}
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
                                classes={classes}
                                label={"admin@ffsaza.co.za"}
                            />
                        </Grid>
                        <Grid >
                            <CustomControlLabel 
                                icon={'fa fa-phone'} 
                                classes={classes}
                                label={"031-100-0141 Cell& What’s app: 0670658662"}
                            />
                        </Grid>
                        <Grid >
                            <CustomControlLabel 
                                icon={'fa fa-home'} 
                                classes={classes} 
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

