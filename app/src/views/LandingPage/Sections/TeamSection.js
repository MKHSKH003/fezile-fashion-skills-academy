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
      <h2 className={classes.title}>Our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}/>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={fezile_mdletshe} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fezile Mdletshe
                <br />
                <small className={classes.smallTitle}>
                  Managing Director and Founder
                </small>
              </h4>
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

          <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <p className={classes.description}>
                Fezile Mdletshe is the Managing Director and Founder of the Fezile Fashion Skills Academy and the Fezile Mdletshe Fashion Agency. Fezile, who is currently a PhD candidate under the DUT Doctoral Mentorship Programme holds a Master of Applied Arts-Fashion Degree (DUT), a Bachelor of Technology Degree in Fashion (DUT) and a National Diploma in Fashion (DUT). A graduate and Fashion Design Lecturer herself, she brings her passion and a great love for fashion coupled with an extensive and impressive history in the industry to any intense learning environment. Having worked with some of South Africa’s biggest fashion retail chains and having previously mentored emerging young fashion designers through the KZN Fashion Council she is in a unique position to educate and guide when it comes to industry, trends and brand development. Fezile was also on Season 1 of the Fashion Reality Show called Made in Africa as a Mentor and Judge which premiered on BET Chanel 129 last year. In 2019, Fezile was dubbed by H & M international and the Sunday Times as one of Africa’s Rising Stars for her contribution towards her local community by opening the first accredited Township based Fashion Design School. Alongside her dedicated team, Fezile has launched one of the fastest growing fashion agencies in the province. Last year the Fezile Mdletshe Fashion Agency (PTY) Ltd was appointed to manage, conceptualize and coordinate various fashion development projects across the province and also internationally such as the Harry Gwala Summer Cup 2018, Drakensberg Extravaganza and Lagos Fashion Week 2018. From these projects alongside Fezile’s many years of fashion coaching through the KZN Fashion Council, she has identified a great need for further development mainly within the fashion space of clothing and textiles. Her entrepreneurial flair was demonstrated in initiating and running a successful online shopping company from 2010 to 2014. Her professional and academic background gives her the necessary skills lead her companies.  Fezile is very passionate about the development of untrained black fashion designers who lack access and finances to study fashion and Clothing Design formally at Universities. For her PhD study she is driven to identity factors that influence creativity and design quality amongst African (Black) untrained Designers whilst exploring design identity through a decolonised curriculum in Fashion Design. Her goal is to upskill such designers to a point where they run as sustainable business which are ready for retail and export opportunities. 

                </p>

          </GridItem>
        </GridContainer>
      </div>
          <GridItem xs={12} sm={12} md={4}/>
        </GridContainer>
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
      
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}/>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ayanda} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ayanda Cele
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
