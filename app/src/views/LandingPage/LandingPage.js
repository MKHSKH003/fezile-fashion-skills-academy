import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "shared/components/Header/Header.js";
import Footer from "shared/components/Footer/Footer.js";
/*
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import Button from "shared/components/CustomButtons/Button.js";
*/
import HeaderLinks from "shared/components/Header/HeaderLinks.js";
import Parallax from "shared/components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import ProductCategories from "./Sections/ProductCategories.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const LandingPage = ({
    userSession,
    setUserSession
}) => {
    const classes = useStyles();
    
    return (
        <div>
            {!userSession.state.registration && !(userSession.state.login || userSession.state.signup) &&
            <Header
                color="transparent"
                routes={dashboardRoutes}
                rightLinks={
                    <HeaderLinks 
                        userSession={userSession}
                        setUserSession={setUserSession}
                    />
                } 
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                userSession={userSession}
                setUserSession={setUserSession}
            />}
            <Parallax />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection 
                        userSession={userSession}
                        setUserSession={setUserSession}
                    />
                    {/*<ProductCategories />*/}
                    <TeamSection />
                    <WorkSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};

LandingPage.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }).isRequired,
    onUserLogin: PropTypes.func.isRequired
};

export default LandingPage;
