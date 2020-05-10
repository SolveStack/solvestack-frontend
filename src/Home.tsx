import React, {FunctionComponent, useState, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    caseSearchPaper: {
      padding: theme.spacing(4)
    },
    gridPaper: {
      padding: theme.spacing(4),
      minHeight: '29rem'
    }
  })
);


const Home: FunctionComponent = () => {
    const classes = useStyles();

    return (
    
        <Grid container spacing={3}>
            <Grid item xs={12}>
                 Hello World
            </Grid>
        </Grid>

    )
};

export default Home;