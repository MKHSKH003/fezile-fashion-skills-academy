import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "shared/components/Header/Header.js";
import HeaderLinks from "shared/components/Header/HeaderLinks.js";
import Footer from "shared/components/Footer/Footer.js";
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import Button from "shared/components/CustomButtons/Button.js";
import Card from "shared/components/Card/Card.js";
import CardBody from "shared/components/Card/CardBody.js";
import CardFooter from "shared/components/Card/CardFooter.js";
import CustomInput from "shared/components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/background-3.jpg";

const useStyles = makeStyles(styles);

const SignupPage = ({
  userSession,
  setUserSession,
  onSignup
}) => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={
          <HeaderLinks 
            userSession={userSession}
            setUserSession={setUserSession}
          />
        }
        userSession={userSession}
        setUserSession={setUserSession}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <p className={classes.divider}>Sign up</p>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      value={userDetails.firstName}
                      onChangeValue={value => setUserDetails({
                        ...userDetails,
                        firstName: value
                      })}
                    />
                    <CustomInput
                      labelText="Last Name..."
                      id="last"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      value={userDetails.lastName}
                      onChangeValue={value => setUserDetails({
                        ...userDetails,
                        lastName: value
                      })}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      value={userDetails.email}
                      onChangeValue={value => setUserDetails({
                        ...userDetails,
                        email: value
                      })}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                      value={userDetails.password}
                      onChangeValue={value => setUserDetails({
                        ...userDetails,
                        password: value
                      })}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button 
                      simple 
                      color="primary"
                      size="lg"
                      onClick={() => onSignup(userDetails)}
                    >
                      Sign up
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    {"Already have an account ?"}
                    <a  href="#" 
                        onClick={() => setUserSession({
                          ...userSession,
                          state: {
                            ...userSession.state,
                            signup: false,
                            login: true  
                          }
                      })}
                    >
                        &nbsp;login
                    </a>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

export default SignupPage;