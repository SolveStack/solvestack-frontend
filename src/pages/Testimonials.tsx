// React
import React, { FunctionComponent } from 'react';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { reviews, ReviewSquare } from '../components/Reviews';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    testimonials: {
      alignItems: 'stretch'
    },
  }));

const Testimonials: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.testimonials} >
            <Grid item xs={12} >
                <header>
                <Typography component="h1" variant="h1">
                    Testimonials
                </Typography>
                </header>
          </Grid>
            {reviews
                .slice(0)
                .reverse()
                .map((review: { key: number; title: string; date: string; text: string }) => {
                    return <ReviewSquare key={review.key} title={review.title} date={review.date} text={review.text} />;
                })}
        </Grid>
    );
};

export default Testimonials;
