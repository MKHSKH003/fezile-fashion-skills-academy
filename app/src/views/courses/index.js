import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';

import Typography from 'shared/components/ProductCategoriesTripography/Typography';
import Parallax from "shared/components/Parallax/Parallax.js";

import { title } from "assets/jss/material-kit-react.js";
import course1 from 'assets/img/courses/4.jpg';
import course2 from 'assets/img/courses/5.jpg';
import course3 from 'assets/img/courses/6.jpg';

import course4 from 'assets/img/courses/7.jpg';
import course5 from 'assets/img/courses/8.jpg';
import course6 from 'assets/img/courses/9.jpg';

import course7 from 'assets/img/courses/1.jpg';
import course8 from 'assets/img/courses/2.jpg';
import course9 from 'assets/img/courses/3.jpg';

const styles = theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '30rem',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
});

const useStyles = makeStyles(styles);

const Courses = ({

}) => {
    const classes = useStyles();

    const fullTimeCourses1 = [
        {
            url: course1,
            title: 'Register Now !',
            width: '33.33%',
        },
        {
            url: course2,
            title: 'Register Now !',
            width: '33.33%',
        },
        {
            url: course3,
            title: 'Register Now !',
            width: '33.33%',
        },
    ];

    const fullTimeCourses2 = [
        {
            url: course4,
            title: 'Register Now !',
            width: '33.33%',
        },
        {
            url: course5,
            title: 'Register Now !',
            width: '33.33%',
        },
        {
            url: course6,
            title: 'Register Now !',
            width: '33.33%',
        },
    ];

    const shortCourses = [
        {
            url: course7,
            title: 'Register Now !',
            width: '33.33%',
        },
        {
            url: course8,
            title: 'Register Now !',
            width: '33.33%',
        },
        {
            url: course9,
            title: 'Register Now !',
            width: '33.33%',
        }
    ];

    return (

        <div>

            <Parallax />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>

                    <Container className={classes.root} component="section">
                        <Typography variant="h4" marked="center" align="center" component="h2">
                            <h2 className={classes.title}>Full Time Courses for 2020</h2>
                        </Typography>
                        <div className={classes.images}>
                            {fullTimeCourses1.map(image => (
                                <ButtonBase
                                    key={image.title}
                                    className={classes.imageWrapper}
                                    href="/"
                                    style={{
                                        width: image.width,
                                    }}
                                >
                                    <div
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <div className={classes.imageBackdrop} />
                                    <div className={classes.imageButton}>
                                        <Typography
                                            component="h3"
                                            variant="h6"
                                            color="inherit"
                                            className={classes.imageTitle}
                                        >
                                            {image.title}
                                            <div className={classes.imageMarked} />
                                        </Typography>
                                    </div>
                                </ButtonBase>
                            ))}
                        </div>
                        <div className={classes.images}>
                            {fullTimeCourses2.map(image => (
                                <ButtonBase
                                    key={image.title}
                                    href="/"
                                    className={classes.imageWrapper}
                                    style={{
                                        width: image.width,
                                    }}
                                >
                                    <div
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <div className={classes.imageBackdrop} />
                                    <div className={classes.imageButton}>
                                        <Typography
                                            component="h3"
                                            variant="h6"
                                            color="inherit"
                                            className={classes.imageTitle}
                                        >
                                            {image.title}
                                            <div className={classes.imageMarked} />
                                        </Typography>
                                    </div>
                                </ButtonBase>
                            ))}
                        </div>


                        <Typography variant="h4" marked="center" align="center" component="h2">
                            <h2 className={classes.title}>Short Courses for 2019</h2>
                        </Typography>
                        <div className={classes.images}>
                            {shortCourses.map(image => (
                                <ButtonBase
                                    key={image.title}
                                    href="/"
                                    className={classes.imageWrapper}
                                    style={{
                                        width: image.width,
                                    }}
                                >
                                    <div
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <div className={classes.imageBackdrop} />
                                    <div className={classes.imageButton}>
                                        <Typography
                                            component="h3"
                                            variant="h6"
                                            color="inherit"
                                            className={classes.imageTitle}
                                        >
                                            {image.title}
                                            <div className={classes.imageMarked} />
                                        </Typography>
                                    </div>
                                </ButtonBase>
                            ))}
                        </div>

                    </Container>
                </div>
            </div>
        </div>
    );
}

Courses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Courses;