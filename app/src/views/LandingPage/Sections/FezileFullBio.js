import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import Button from "shared/components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function FezileFullBio() {
  const [classicModal, setClassicModal] = React.useState(false);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6} lg={4}>
        <Button color="primary" block onClick={() => setClassicModal(true)}>
          <LibraryBooks className={classes.icon} />
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => setClassicModal(false)}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Bio</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <p>
              Fezile Mdletshe is the Managing Director and Founder of the Fezile
              Fashion Skills Academy and the Fezile Mdletshe Fashion Agency.{" "}
            </p>
            <p>
              She is currently a PhD candidate under the DUT Doctoral Mentorship
              Programme holds a Master of Applied Arts-Fashion Degree (DUT), a
              Bachelor of Technology Degree in Fashion (DUT) and a National
              Diploma in Fashion (DUT). A graduate and Fashion Design Lecturer
              herself, she brings her passion and a great love for fashion
              coupled with an extensive and impressive history in the industry
              to any intense learning environment.{" "}
            </p>
            <p>
              {" "}
              Having worked with some of South Africa’s biggest fashion retail
              chains and having previously mentored emerging young fashion
              designers through the KZN Fashion Council she is in a unique
              position to educate and guide when it comes to industry, trends
              and brand development. Fezile was also on Season 1 of the Fashion
              Reality Show called Made in Africa as a Mentor and Judge which
              premiered on BET Chanel 129 last year. In 2019, Fezile was dubbed
              by H & M international and the Sunday Times as one of Africa’s
              Rising Stars for her contribution towards her local community by
              opening the first accredited Township based Fashion Design School.
              Alongside her dedicated team, Fezile has launched one of the
              fastest growing fashion agencies in the province.{" "}
            </p>
            <p>
              {" "}
              In year 2018 Fezile Mdletshe Fashion Agency (PTY) Ltd was
              appointed to manage, conceptualize and coordinate various fashion
              development projects across the province and also internationally
              such as the Harry Gwala Summer Cup 2018, Drakensberg Extravaganza
              and Lagos Fashion Week 2018. From these projects alongside
              Fezile’s many years of fashion coaching through the KZN Fashion
              Council, she has identified a great need for further development
              mainly within the fashion space of clothing and textiles. Her
              entrepreneurial flair was demonstrated in initiating and running a
              successful online shopping company from 2010 to 2014. Her
              professional and academic background gives her the necessary
              skills lead her companies.
            </p>{" "}
            <p>
              Fezile is very passionate about the development of untrained black
              fashion designers who lack access and finances to study fashion
              and Clothing Design formally at Universities. For her PhD study
              she is driven to identity factors that influence creativity and
              design quality amongst African (Black) untrained Designers whilst
              exploring design identity through a decolonised curriculum in
              Fashion Design. Her goal is to upskill such designers to a point
              where they run as sustainable business which are ready for retail
              and export opportunities.
            </p>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => setClassicModal(false)}
              color="danger"
              simple
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
}
