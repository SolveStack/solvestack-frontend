// React
import React, { FunctionComponent } from 'react';
//assets
import company from "../assets/you-x-ventures-Oalh2MojUuk-unsplash.jpg";
// Material-UI Components
import Grid from '@material-ui/core/Grid';
// App Components
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: theme.spacing(2),
            height: "100%"
        },
    }),
);

const Training: FunctionComponent = () => {
    const classes = useStyles();
    return (
      
       <Grid container spacing={3} >
        <Grid item xs={12}>
          <header>
            <Typography component="h1" variant="h1">   
              Training for Tech Companies
            </Typography>
            <Typography component="h4" variant="h4">
              Let us help you hire quality developers
            </Typography> 
          </header>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={20} className={classes.card} square >
            <Typography variant="body1" >
                “We help engineering teams utilize up-and-coming, well-rounded devs who can hit the ground running on day 1.”<br/><br/>
                We do this by preparing the devs to be well rounded, instead of one-trick ponies or code monkeys.<br/><br/>  
                We strive to create independent thinkers with sound opinions, the propensity to ask good questions, and the ability to think critically when solving complex problems.
            </Typography>
          </Card>
        </Grid>  
        <Grid container item spacing={3}> 
          <Grid item md={4} spacing={3} >
              <Card elevation={20} className={classes.card} square >
                <Typography variant="body1" >  
                Developers are a finite resource - and we need to do a better job of sourcing talent and preparing them to jump right in. There is some on-the-job knowledge that really doesn’t need to be on-the-job. We take that knowledge and build it right into the curriculum. We focus on software architecture and DevOps knowledge in particular. That way the developer understands how the whole picture is built as a whole instead of understanding only the lines of code.
                </Typography>
              </Card>
          </Grid>
          <Grid md={8} spacing={3} item>
            <Card elevation={20} square >
              <CardMedia 
                component="img"
                alt="Company Training"
                image={company}
                title="Training for Tech Companies"
              />
            </Card>
          </Grid>
          <Grid md={12} spacing={3} item>
          <Card elevation={20} className={classes.card} square >
          <Typography variant="body1" >
              When you take a coder that starts with a more generalist approach and have them start to use your stack, it helps them form connections that they wouldn’t normally form when coming from a single stack bootcamp, such as a MEAN-stack bootcamp. They will be better prepared to work in your codebase and your tools, gain an understanding of why you’ve chosen the stack you’ve chosen, and learn how the technologies in the chosen stack differ from technologies that would be utilized in alternate approaches. 
              </Typography>
          </Card>
          </Grid>
        </Grid>
            
        </Grid>
      
    );
};

export default Training;
