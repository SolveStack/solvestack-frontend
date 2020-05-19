// React
import React, { FunctionComponent } from 'react';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material-UI Components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(16, 8),
            textAlign: 'center',
        },
        sheen: {
            background: 'linear-gradient(110deg, #000 20%, pink 40%, #ff73a1 60%, #000 80%)',
            backgroundSize: '200% auto',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            animation: '$shine 6s linear infinite',
            '&:hover': {
                animation: '$tilt 1.25s ease-in-out infinite alternate',
            },
        },
        '@keyframes shine': {
            to: {
                backgroundPosition: '200% center',
            },
        },
        '@keyframes tilt': {
            '0%': {
                transform: 'scale(1)',
            },
            '100%': {
                transform: 'scale(1.1)',
            },
            to: {
                backgroundPosition: '200% center',
            },
        },
    }),
);

interface BannerProps {
    title: string;
    subtitle: string;
}

const Banner: FunctionComponent<BannerProps> = ({ title, subtitle }: BannerProps) => {
    const classes = useStyles();

    return (
        <Paper elevation={20} className={classes.paper}>
            <Typography component="h1" variant="h1" className={classes.sheen}>
                {title}
            </Typography>
            <Typography component="p" variant="h2">
                {subtitle}
            </Typography>
        </Paper>
    );
};

export default Banner;
