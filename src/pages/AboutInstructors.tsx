// React
import React, { FunctionComponent } from 'react';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { instructors, InstructorSquare } from '../components/Instructors';

const useStyles = makeStyles({
    aboutInstructors: {
      alignItems: 'stretch'
    },
  });

const AboutInstructors: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.aboutInstructors} >
            <Grid item xs={12}  >
                <header>
                <Typography component="h1" variant="h1">
                    About the Instructors
                </Typography>
                </header>
          </Grid>
            {instructors
                .map((instructor: { key: number; title: string; specialty: string; text: string; linkedIn: string; website: string;
                  twitter: string; image: any; }) => {
                    return <InstructorSquare 
                      key={instructor.key} 
                      title={instructor.title} 
                      specialty={instructor.specialty}
                      text={instructor.text} 
                      linkedIn={instructor.linkedIn} 
                      website={instructor.website} 
                      twitter={instructor.twitter} 
                      image={instructor.image} />;
                })}
        </Grid>
    );
};

export default AboutInstructors;
