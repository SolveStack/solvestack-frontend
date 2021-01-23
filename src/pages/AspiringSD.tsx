// React
import React, { FunctionComponent } from 'react';
//assets
import laptop from "../assets/jay-wennington-EHp92wvf3Vg-unsplash.jpg";
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material UI Components
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  underline: {
      textDecoration: "underline",
  },
}),
);

const AspiringSD: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <header>
              <Typography>
                <h1>Aspiring Software Developers</h1>
              </Typography>
            </header>
          </Grid>
          <Grid md={4} spacing={2} item >
            <Card square >
              <CardMedia 
                component="img"
                alt="Laptop with Code"
                image={laptop}
                title="Aspiring Software Developers"
              />
            </Card>
            <Card square >
              <CardContent>
                <Typography>
                  <h3>Coding Language: Python</h3>
                  <h3>Course Length: 20 Weeks</h3>
                  <h3>Teachers: 5 Teachers</h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={8} spacing={2} item >
            <Card square >
              <CardContent>
                <Typography>
                <h1>Learn everything to become a software developer in one year.</h1>
                <br />
                <h2><span className={classes.underline}>Backend Course</span> (Semester 1)</h2>
                <h2>3 Weeks Python Fundamentals</h2>
                <h2>3 Weeks Python Programming</h2>
                <h2>4 Weeks of SQL</h2>
                <h2>6 Weeks of Web Services</h2>
                <h2>4 Weeks of DevOps (Portfolio Building)</h2>
                <br />
                <br />
                <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    );
};

export default AspiringSD;
