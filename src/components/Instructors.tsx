// React
import React, { FunctionComponent } from 'react';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
//instructor photos
import ana from '../assets/ana.png';
import alec from '../assets/alec.jpg';
import chrissy from '../assets/chrissy.jpg';
import daisy from '../assets/daisy.png';

interface Instructor {
  key: number;
  title: string;
  specialty: string;
  text: string;
  linkedIn: string;
  website: string;
  twitter: string;
  image: any;
}

const useStyles = makeStyles({
  instructors: {
    alignSelf: 'stretch'
  },
  card: { height: "100%" },
  image: {
    height: "50%",
    width: "50%",
    margin: "0 auto"
  }
});

//For all new reviews, push to the end and be sure to give a key
export const instructors: Array<Instructor> = [
  {
    key: 0,
    title: "Ana Tomboulian",
    specialty: "Python",
    text: "I'm Ana and I've been in programming and infrastructure roles working at companies for over 10 years. I had a really tough time getting started with programming at college in my Computer Science class, CS101 and almost quit programming altogether before I had truly learned the basics. I really thought I was not cut out to be a software developer. What helped me move forward was an apprenticeship program and an active mentor. So, later in life I decided to start a community that I wish I had had around to ask some of the hardest questions, and with obtaining answers to those questions, would help me have things finally click." +
    "I hope to be that mentor and guide for you, too. After giving 4 hours of my time for free every Saturday for about 4 months now at the time of this writing, it's time to pay it forward in a more lasting way - a bootcamp unlike any other bootcamps out there - one that promises to get you hired at real businesses once you reach a certain level of certification. I want to create the apprenticeship program that was the formula for my success, and my ultimate dream is to help you learn how to become a successful developer faster than I learned to become one.", 
    linkedIn: "https://www.linkedin.com/in/anatomboulian/",
    website: "http://anatomboulian.com",
    twitter: "@AnaTomboulian",
    image: ana
  },
  {
    key: 1,
    title: "Alec Puente",
    specialty: "Fullstack",
    text: "Hey, I'm Alec! I started programming when I was young and it quickly realized that it was my true calling. I am originally self-taught but decided to go to university to hone my understanding of computer science at a fundamental level. I have been professionally programming for 5 years now in the healthcare IT industry. I love applying what I have learned over the years to a field that directly impacts people's wellbeing and livelihood. I am always striving to further my impact in anyway possible and I hope that teaching people who have the same desire to learn programming can be the catalyst for their successful career in technology.",
    linkedIn: "https://www.linkedin.com/in/alec-puente/",
    website: "",
    twitter: "",
    image: alec
  },
  {
    key: 2,
    title: "Daisy Murillo",
    specialty: "DB/SQL",
    text: "Howdy! My name is Daisy Murillo and I like to program computers. I currently work as Infrastructure Engineer @ American Express doing more devops work for the company. I got into computers from an early age from competing in robotics teams, to attending hackathons, and volunteering at STEM events to teach others how to code. I've always loved sharing my passion for technology and bringing it wherever I go. I consider myself a lifelong student of tech and continue to do so today. If you want to know more about me and my past endeavors in technology, feel free to visit my personal page below.",
    linkedIn: "https://www.linkedin.com/in/daisy-murillo/",
    website: "http://daisymurillo.com",
    twitter: "",
    image: daisy
  },
  {
    key: 3,
    title: "Brandon Knox",
    specialty: "",
    text: "Brandon first discovered programming with BASIC. He was hooked when he started writing text adventure games after playing Zork. He now spends most of his day writing code in Python for reporting and analysis at a financial institution. Some nights he is a substitute teacher, covering curriculum for data analysis with Python and JavaScript. He enjoys mentoring other programmers inside and outside of work, digitally painting, and quiet evenings with a good book. Current projects include learning native iOS development with Swift and learning data analysis with PySpark.",
    linkedIn: "https://www.linkedin.com/in/brandon-knox-04877617/",
    website: "",
    twitter: "@BknoxDev",
    image: ""
  },
  {
    key: 4,
    title: "Mike Nolte",
    specialty: "",
    text: "",
    linkedIn: "",
    website: "",
    twitter: "",
    image: ""
  },
  {
    key: 5,
    title: "Chrissy Albert",
    specialty: "Frontend",
    text: "Hello, I'm Chrissy. I'm a teacher/mom/self-taught coder. I started my career in elementary education and loved the experience of empowering others with the gift of knowledge. I have always been interested in technology and programming, so after I had children I began to learn about web development. Soon I was teaching myself HTML and CSS, and JavaScript not long after that. As I built more websites, I gained more experience and confidence in my skills. I'm currently working as a software engineer, and I am living proof that you can make a mid-life career change into programming.",
    linkedIn: "https://www.linkedin.com/in/chrissyalbert/",
    website: "https://chrissyalbert.github.io/",
    twitter: "",
    image: chrissy
  }
];

export const InstructorSquare: FunctionComponent<Instructor> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item md={4} className={classes.instructors}>
        <Card className={classes.card} >   
        <CardHeader
          title={props.title}
          subheader={props.specialty}
        />
          <CardContent>
            {props.image && 
              <CardMedia 
              className={classes.image}
              component="img"
              alt={props.title}
              image={props.image}
              title={props.title}
            />
            }
            <br />
            <Typography>
              {props.text}
              <p>Contact details:</p>
              <a href={props.linkedIn} target="_blank">{props.linkedIn ? 'LinkedIn' : null}</a>
              <br />
              <a href={props.website} target="_blank">{props.website ? props.website : null}</a>
              <br/>
              <a href={`https://twitter.com/${props.twitter}`} target="_blank" >{props.twitter ? props.twitter : null}</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid> 
    </React.Fragment>
  );
}