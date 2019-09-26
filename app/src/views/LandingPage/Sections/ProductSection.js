import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LooksOne from "@material-ui/icons/LooksOne";
import LooksTwo from "@material-ui/icons/LooksTwo";
import Looks3 from "@material-ui/icons/Looks3";
import Looks4 from "@material-ui/icons/Looks4";

// core components
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import InfoArea from "shared/components/InfoArea/InfoArea.js";
import Button from "shared/components/CustomButtons/Button.js";
import Registration from "shared/components/registration";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection({
  userSession,
  setUserSession
}) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Registration 
        userSession={userSession}
        setUserSession={setUserSession} 
      />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Button 
            color="success" size="lg"
            onClick={() => userSession.state.isLoggedIn 
              ? setUserSession({
                  ...userSession,
                  state: {
                    ...userSession.state,
                    registration: true 
                  }
                }) 
              : setUserSession({
                  ...userSession,
                  state: {
                    ...userSession.state,
                    login: true,
                    registration: true  
                  }
                })
            }
          >
            <i className="fas fa-bars" />
            Register Online !
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Fezile Fashion Skills Academy</h2>
          <h5 className={classes.description}>
            SA’s leading Township based Fashion School | Full Time {`&`} Part
            Time Fashion Courses | Accredited. Driven By Fashion, Sustained by
            Passion: Discover the 1st Fashion Skills Academy in KwaMashu
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Applied Design"
              description="The Applied Design course covers all the fundamentals of Clothing Design.
                           After this module, you will be able to demonstrate a deeper understanding
                           when it comes to designing for clients, sizes and Fashion Collections."
              icon={LooksOne}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Pattern Skills & Design"
              description="The Pattern Skills & Design module covers all aspects and fundamentals of Pattern Making.
                           In this course you will learn the fundamentals of drafting various blocks according to sizing
                           and silhouettes. You will become a master in manipulating style lines."
              icon={LooksTwo}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Garment Construction & Technology & Technology"
              description="After this module, you will be SEWING LIKE a PRO!!"
              icon={Looks3}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Fashion Coaching & Mentorship"
              description="Fezile Mdletshe who is the Founder of the Academy facilitates one-on-one workshops on a needs basis.
                           There will be  classes planned for the Dundee July, Harry Gwala Summer Cup & Drakensberg Extravangaza
                           Fashion Showcases. Fezile also coaches for market access preparedness for Local and International Fashion
                           weeks."
              icon={Looks4}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
