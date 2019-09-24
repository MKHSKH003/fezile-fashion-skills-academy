import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/utils/use-styles';
import FormControlSelect from '../shared/components/form-control-select';
import CustomTextField from '../shared/components/custom-text-field';

const Marketing = ({
    marketingDetails,
    setMarketingDetails
}) => {
    const classes = useStyles();
    const marketingMediaOptions = [
        "",
        "Exhibition",
        "Newspaper",
        "Internet(Website)",
        "Friends",
        "Family/Parents",
        "Posters",
        "School Visit",
        "Guidance Consellor"
    ]
    
    return (
        <div className={classes.root}>
          
            <Grid container spacing={3}>
                <Paper className={classes.paper}>
                    How did you hear about the programme you are applying for at FEZILE
                    FASHION SKILLS ACADEMY?
                </Paper>
                <Grid item xs={12} sm={12} md={6} >
     
                    <Paper className={classes.paper}>
                        <FormControlSelect
                            field={'marketingMediaId'}
                            label={"Marketing Media"}
                            index={true}
                            options={marketingMediaOptions}
                            classes={classes}
                            objectDetails={marketingDetails}
                            setObjectDetails={setMarketingDetails}
                        />
   
                        {marketingDetails.marketingMediaId == "8" &&
                            <>
                                <CustomTextField
                                    type="text"
                                    field={'guidanceConsellorName'}
                                    placeholder={"Guidance Consellor Name"}
                                    helperText={"Please provide Name of Guidance Consellor."}
                                    objectDetails={marketingDetails}
                                    setObjectDetails={setMarketingDetails}
                                />
                                <CustomTextField
                                    type="text"
                                    field={'guidanceConsellorContact'}
                                    placeholder={"Guidance Consellor Contact"}
                                    helperText={"Please provide Contact of Guidance Consellor."}
                                    objectDetails={marketingDetails}
                                    setObjectDetails={setMarketingDetails}
                                />
                            </>
                        }
                    </Paper>
                </Grid>
            </Grid> 
        </div>
    );
}

export default Marketing;