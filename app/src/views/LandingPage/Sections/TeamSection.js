import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import Button from "shared/components/CustomButtons/Button.js";
import Card from "shared/components/Card/Card.js";
import CardBody from "shared/components/Card/CardBody.js";
import CardFooter from "shared/components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import fezile_mdletshe from "assets/img/faces/fezile_mdletshe2.jpg";
import hlengiwe_gumede from "assets/img/faces/hlengiwe_gumede.jpg";
import ayanda from "assets/img/faces/ayanda.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hlengiwe_gumede} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Hlengiwe Shembe
                <br />
                <small className={classes.smallTitle}>Integral Part Of Designing The Skills Curriculum</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Hlengiwe Shembe is a young energetic soul from Inanda.
                  She has an amazing love for working with the local community
                  in training and Skills Development. She is a DUT Graduate who
                  achieved a Gideon Merit Award.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  href="https://www.instagram.com/hlengsta007/"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={fezile_mdletshe} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fezile Mdlesthe
                <br />
                <small className={classes.smallTitle}>
                  Managing Director and Founder
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Fezile, who is currently a PhD candidate under the DUT
                  Doctoral Mentorship Programme holds a Master of Applied
                  Arts-Fashion Degree (DUT), Bachelor of Technology Degree in
                  Fashion (DUT) and a National Diploma in Fashion (DUT).
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  href="https://twitter.com/fezile_mdletshe?lang=en"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  href="https://www.instagram.com/ffsa_official/"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100009673720231"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ayanda} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                 Ayanda
                <br />
                <small className={classes.smallTitle}>Administrator</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Ayanda, our Admin Ninja doing the most to ensure
                  efficiency at the Academy. She is the lady that
                  swiftly responds to all your inquiries regarding
                  courses and end school.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
