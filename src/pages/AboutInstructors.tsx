// React
import React, { FunctionComponent } from 'react';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';


const useStyles = makeStyles({
    aboutInstructors: {
      alignItems: 'stretch'
    },
  });

const AboutInstructors: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.aboutInstructors} >
            <Grid item xs={12} >
                <header>
                <Typography>
                    <h1>About the Instructors</h1>
                </Typography>
                </header>
          </Grid>
            {}
        </Grid>
    );
};

export default AboutInstructors;
