// React
import React, { FunctionComponent } from 'react';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

interface Review {
  key: number;
  title: string;
  date: string;
  text: string;
}

const useStyles = makeStyles({
  testimonials: {
    alignSelf: 'stretch'
  },
});

//For all new reviews, push to the end and be sure to give a key
export const reviews: Array<Review> = [
  {
    key: 0,
    title: "Chrissy Albert",
    date: "October 30, 2020",
    text: "This is a really supportive group! I'm meeting wonderful people and learning so much from Ana and Brandon. There are opportunities to lead, and I've been able to step up and share my knowledge is some small group sessions. The best part is that people are super welcoming and are willing to meet you where you are at with your current knowledge and skills."
  },
  {
    key: 1,
    title: "Gina Aorahim",
    date: "October 30, 2020",
    text: "The most amazing environment and knowledgeable people. Ana is experienced, fun, and dedicated to teaching. I’ve learned differences with dockers and vm’s, frameworks, libraries, languages, and the engineering mindset to understand code. I think This safe and energetic place is recommended for all levels of programmers." +
    " Highly recommend 10/10" +
    " Staff is amazing 10/10" + 
    " Practice social distancing 10/10" + 
    " Knowledge 10/10" +
    " Fun 10/10" +
    " Learn something new 10/10"
  },
  {
    key: 2,
    title: "Antoinette V Jaycox",
    date: "October 30, 2020",
    text: "Unbelievable knowledge sharing community. So supportive and patient regardless of technical ability."
  },
  {
    key: 3,
    title: "Miguel de Maria",
    date: "October 31, 2020",
    text: "SolveStack is a great place to learn from experienced coders who are in the business. Ana and the other teachers, as well as the the other members, are friendly, welcoming, and patient. I found this a great place to learn and be exposed to programming environments and apps I had never have heard of. Highly recommended!"
  }
];

export const ReviewSquare: FunctionComponent<Review> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item md={4} className={classes.testimonials}>
        <Card>
        <CardHeader
          title={props.title}
          subheader={props.date}
        />
          <CardContent>
            <Typography>
              {props.text}
            </Typography>
          </CardContent>
        </Card>
      </Grid> 
    </React.Fragment>
  );
}