// React
import React, { FunctionComponent } from 'react';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material-UI Components
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            textAlign: 'center',
            fontSize: 10,
            marginLeft: '10px',
        },
    }),
);

const Footer: FunctionComponent = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();

    return (
        <Box>
            <p className={classes.text}>
                &copy; {year} Solvestack, LLC | <a href="/terms">Terms of Service</a> |{' '}
                <a href="/privacy">Privacy Policy</a>
            </p>
        </Box>
    );
};

export default Footer;
