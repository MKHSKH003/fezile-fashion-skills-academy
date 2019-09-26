import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/utils/use-styles';
import FormControlSelect from 'shared/components/dimensional-form-control-select/1D-form-control-select';

const courses = [
    "",
    "CLOTHING DESIGN DEVELOPMENT, ENTREPRENEURSHIP & RETAIL",
    "CLOTHING TECHNOLOGY AND ENTREPRENEURSHIP- FULL TIME COURSE",
    "APPLIED DESIGN SHORT COURSE",
    "BASIC PATTERN SKILLS AND DESIGN SHORT COURSE",
    "ADVANCED PATTERN SKILLS AND DESIGN SHORT COURSE",
    "BASIC GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE",
    "ADVANCED GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE",
    "BRIDAL PATTERN TECHNOLOGY SHORT COURSE",
    "BRIDAL GARMENT CONSTRUCTION AND TECHNOLOGY SHORT COURSE"
]

const Course = ({
    course,
    setCourse
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <FormControlSelect
                    field={'courseId'}
                    label={"Select course"}
                    index={true}
                    options={courses}
                    classes={classes}
                    objectDetails={course}
                    setObjectDetails={setCourse}
                />
            </Grid>
        </div>
    );
}

export default Course;