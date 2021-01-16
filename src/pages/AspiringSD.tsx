// React
import React, { FunctionComponent } from 'react';
//assets
import laptop from "../assets/jay-wennington-EHp92wvf3Vg-unsplash.jpg";
// Material UI Components
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    underline: {
        textDecoration: "underline",
    },
    card: { height: "100%" }
  }),
);

const AspiringSD: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <header>
            <Typography component="h1" variant="h1"> 
                Aspiring Software Developers
            </Typography>
            </header>
          </Grid>
          <Grid md={4} spacing={2} item >
            <Card elevation={20} square >
              <CardMedia 
                component="img"
                alt="Laptop with Code"
                image={laptop}
                title="Aspiring Software Developers"
              />
              <CardContent>
                <Typography component="h3" variant="h3">
                  Coding Language: Python<br/><br/>
                  Course Length: 20 Weeks<br/><br/>
                  Teachers: 6 Teachers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={8} spacing={2} item >
            <Card elevation={20} className={classes.card} square >
              <CardContent>
                <Typography component="h1" variant="h1">
                Learn everything to become a software developer in one year.
                </Typography>
                <Typography component="h2" variant="h2"> 
                <br />
                <span className={classes.underline}>Backend Course</span> (Semester 1)
                3 Weeks Python Fundamentals<br/><br/>
                3 Weeks Python Programming<br/><br/>
                4 Weeks of SQL<br/><br/>
                6 Weeks of Web Services<br/><br/>
                4 Weeks of DevOps (Portfolio Building)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    );
};

export default AspiringSD;
