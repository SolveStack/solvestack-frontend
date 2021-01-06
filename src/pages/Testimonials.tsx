// React
import React, { FunctionComponent } from 'react';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';

import { reviews, ReviewSquare } from '../components/Reviews';
const useStyles = makeStyles({
    testimonials: {
      alignItems: 'stretch'
    },
  });

const Testimonials: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.testimonials} >
            <Grid item xs={12} >
                <header>
                <Typography>
                    <h1>Testimonials</h1>
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
