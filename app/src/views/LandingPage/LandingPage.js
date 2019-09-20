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
    isUserLoggedIn,
    user,
    onUserLogin
}) => {
    const classes = useStyles();

    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                rightLinks={
                    <HeaderLinks 
                        isUserLoggedIn={isUserLoggedIn}
                        user={user} 
                        onUserLogin={onUserLogin}
                    />
                }
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
            />
            <Parallax />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection />
                    <ProductCategories />
                    <TeamSection />
                    <WorkSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};

LandingPage.defaultProps = {
    isUserLoggedIn: false
};

LandingPage.propTypes = {
    isUserLoggedIn: PropTypes.bool,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }).isRequired,
    onUserLogin: PropTypes.func.isRequired
};

export default LandingPage;
