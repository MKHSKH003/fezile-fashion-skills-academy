import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Looks1 from "@material-ui/icons/LooksOne";
import Looks2 from "@material-ui/icons/LooksTwo";
import Looks3 from "@material-ui/icons/Looks3";
import Looks4 from "@material-ui/icons/Looks4";
import Looks5 from "@material-ui/icons/Looks5";
import Looks6 from "@material-ui/icons/Looks6";
import Looks7 from "@material-ui/icons/Looks6";

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
            Register Online 
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
              title="NATIONAL CERTIFICATE: CLOTHING DESIGN DEVELOPMENT, ENTREPRENEURSHIP & RETAIL  (2 Years)"
              description="This course covers a vast area in fashion which will groom you to become a sought-after clothing design specialist with skills in range building, pattern making, 
              textiles, costing and garment construction. During this course you will be polished on your design aesthetic, fashion merchandising and entrepreneurship."
              icon={Looks1}
              iconColor="success"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="NATIONAL CERTIFICATE: CLOTHING TECHNOLOGY AND ENTREPRENEURSHIP- FULL TIME COURSE (1 Year)"
              description="This course covers predominantly techniques and elements in clothing technology such as design, pattern making and garment construction. During this course you will be polished on your design aesthetic and fashion entrepreneurship."
              icon={Looks2}
              iconColor="success"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="SKILLS PROGRAMME CERTIFICATE: APPLIED DESIGN SHORT COURSE"
              description="The Applied Design course covers all the fundamentals of Clothing Design.
                           After this module, you will be able to demonstrate a deeper understanding
                           when it comes to designing for clients, sizes and Fashion Collections."
              icon={Looks3}
              iconColor="info"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="SKILLS PROGRAMME CERTIFICATE: PATTERN SKILLS AND DESIGN SHORT COURSE"
              description="The Pattern Skills & Design module covers all aspects and fundamentals of Pattern Making.
                           In this course you will learn the fundamentals of drafting various blocks according to sizing
                           and silhouettes. You will become a master in manipulating style lines."
              icon={Looks4}
              iconColor="info"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="SKILLS PROGRAMME CERTIFICATE: GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE"
              description="After this module, you will be SEWING LIKE a PRO!!
              Fashion Coaching & Mentorship"
              icon={Looks5}
              iconColor="info"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="SKILLS PROGRAMME CERTIFICATE: BRIDAL PATTERN TECHNOLOGY SHORT COURSE"
              description="The bridal short course will equip you with key skills suitable to construct any bespoke wedding gown for various bridal clients. In Pattern Design you will learn and master the art of a tailored fit and sizing through corsetry. Within garment  construction, you will learn about various finishes, techniques, fabrics and costing."
              icon={Looks6}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
