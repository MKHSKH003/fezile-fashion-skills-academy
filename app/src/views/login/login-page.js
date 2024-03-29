import React, { useState } from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

import { Spinner } from "react-bootstrap"

// core components
import Header from "shared/components/Header/Header.js";
import HeaderLinks from "shared/components/Header/HeaderLinks.js";
import Footer from "shared/components/Footer/Footer.js";
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import Button from "shared/components/CustomButtons/Button.js";
import Card from "shared/components/Card/Card.js";
import CardBody from "shared/components/Card/CardBody.js";
import CardHeader from "shared/components/Card/CardHeader.js";
import CardFooter from "shared/components/Card/CardFooter.js";
import CustomInput from "shared/components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/background-2.jpg";

const useStyles = makeStyles(styles);

const LoginPage = ({
  userSession,
  setUserSession,
  onLogin
}) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  })
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const change = () => console.log('changing...');
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
                  <p className={classes.divider}>Login</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        required: true,
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
                      onClick={() => onLogin.execute(userDetails)}
                    >
                      <Spinner animation="border" variant="primary" /> Login
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    {"Don't have an account ? "}
                      <a  href="#" 
                          onClick={() => setUserSession({
                              ...userSession,
                              state: {
                                ...userSession.state,
                                signup: true,
                                login: false  
                              }
                          })}
                      >   
                          &nbsp;sign up
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

export default LoginPage;