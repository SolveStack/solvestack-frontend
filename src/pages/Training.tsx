// React
import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material-UI Components
import Grid from '@material-ui/core/Grid';
// App Components
import Banner from '../components/Banner';
import Dendrogram from '../components/Dendrogram';
import Module from 'components/Module';
import { Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chart: {
            width: '100%',
            height: '500px',
            border: '1rem solid teal',
            background: 'linear-gradient(130deg, rgba(0,0,0,1) 10%, rgba(255,115,161,1) 100%)',
        },
        paper: {
            padding: theme.spacing(4),
        },
        marginTop: {
          marginTop: 15
        }
    }),
);

const Training: FunctionComponent = () => {
    const classes = useStyles();
    return (
      <>
       <Grid container spacing={3}>
            <Grid item md={12}>
              <Banner
                title="Training for Tech Companies"
                subtitle="Let us help you hire quality developers"
              />
            </Grid>
            <Grid item md={12}>
              <Paper elevation={20} className={classes.paper}>
                <Typography component="h2" variant="h2">
                  Mission Statement for Companies
                </Typography>
                <Typography variant="body1" className={classes.marginTop}>
                “We help engineering teams utilize up-and-coming, well-rounded devs who can hit the ground running on day 1.”<br/><br/>
                We do this by preparing the devs to be well rounded, instead of one-trick ponies or code monkeys.<br/><br/>  
                We strive to create independent thinkers with sound opinions, the propensity to ask good questions, and the ability to think critically when solving complex problems.<br/><br/>
                Developers are a finite resource - and we need to do a better job of sourcing talent and preparing them to jump right in. There is some on-the-job knowledge that really doesn’t need to be on-the-job. We take that knowledge and build it right into the curriculum. We focus on software architecture and DevOps knowledge in particular. That way the developer understands how the whole picture is built as a whole instead of understanding only the lines of code.<br/><br/>
                When you take a coder that starts with a more generalist approach and have them start to use your stack, it helps them form connections that they wouldn’t normally form when coming from a single stack bootcamp, such as a MEAN-stack bootcamp. They will be better prepared to work in your codebase and your tools, gain an understanding of why you’ve chosen the stack you’ve chosen, and learn how the technologies in the chosen stack differ from technologies that would be utilized in alternate approaches. 
                </Typography>
              </Paper>
            </Grid>
        </Grid>
      </>
    );
};

export default Training;
