// React
import React, { FunctionComponent } from 'react';
// Material-UI Styles
//import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import { reviews, ReviewSquare } from '../util/reviews';

/*
TODO: figure out how to style
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const classes = useStyles();
*/
const Testimonials: FunctionComponent = () => {

    return (
        <Grid container spacing={3}>
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
