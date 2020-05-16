import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            background: 'linear-gradient(90deg, rgba(0,60,113,1) 0%, rgba(0,113,197,1) 50%, rgba(0,174,239,1) 100%)',
        },
        appLogo: {
            marginRight: theme.spacing(1),
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        title: {
            flexGrow: 1,
        },
    }),
);

interface NavbarProps {
    handleDrawerToggle: () => void;
}

const Navbar: FunctionComponent<NavbarProps> = ({ handleDrawerToggle }: NavbarProps) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" component="span" noWrap className={classes.title}>
                    SolveStack
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
