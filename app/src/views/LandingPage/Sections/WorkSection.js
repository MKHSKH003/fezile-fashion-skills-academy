import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import CustomInput from "shared/components/CustomInput/CustomInput.js";
import Button from "shared/components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import LocationDetails from "./Location Details/LocationDetails";

const useStyles = makeStyles(styles);

const WorkSection = ({
  userSession,
  setUserSession,
  sendEmail
}) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12} className={classes.locationdetails}>
          <h2 className={classes.title}>Get in touch</h2>
          <LocationDetails  />
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Be a part of the first Fashion Academy in KwaMashu
            (Durban,KwaZulu-Natal) Enquire NOW about our Masterclasses!
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  value={userSession.emailDetails.name}
                  onChangeValue={value => setUserSession({
                    ...userSession,
                    emailDetails: {
                      ...userSession.emailDetails,
                      name: value
                    }
                  })}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  value={userSession.emailDetails.emailAddress}
                  onChangeValue={value => setUserSession({
                    ...userSession,
                    emailDetails: {
                      ...userSession.emailDetails,
                      emailAddress: value
                    }
                  })}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                value={userSession.emailDetails.message}
                  onChangeValue={value => setUserSession({
                    ...userSession,
                    emailDetails: {
                      ...userSession.emailDetails,
                      message: value
                    }
                  })}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button 
                    color="primary"
                    onClick={() => sendEmail(userSession.emailDetails)}
                  >
                    Send Message
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default WorkSection;