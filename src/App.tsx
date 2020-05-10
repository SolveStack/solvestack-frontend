import React, { FunctionComponent, Fragment, useState, lazy, Suspense } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { CreateCSSProperties, CSSProperties } from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';
import ScrollToTop from './util/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

const drawerWidth = 240;
const Home = lazy(() => import('./pages/Home')); // The home page is lazy loaded

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    authentication: {
      background: 'linear-gradient(18deg, rgba(0,60,113,1) 20%, rgba(0,113,197,1) 72%, rgba(0,174,239,1) 100%)', 
      color: theme.palette.common.white, 
      margin: 'auto', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    intelLogo: {
      marginRight: theme.spacing(1)
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: 'flex',
      marginTop: '4rem',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        marginTop: '3.5rem'
      },
      marginBottom: '1rem'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar as CSSProperties | CreateCSSProperties<{}> | ((props: {}) => CreateCSSProperties<{}>)
  })
);

interface AppData {
  isMobile: boolean;
}

const App: FunctionComponent = () => {
  const classes = useStyles();

  const [appData, setAppData] = useState<AppData>({isMobile: false});

  const handleDrawerToggle = () => {
    setAppData(prevValue => ({...prevValue, isMobile: !prevValue.isMobile}));
  };


  return (
    <Router>
    <ScrollToTop/>
      <CssBaseline />
      <Fragment>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar isMobile={appData.isMobile} handleDrawerToggle={handleDrawerToggle} />
      <div role="main" className={classes.main}>
        <div className={classes.toolbar} />
              <Container maxWidth='xl' disableGutters>
              <Suspense fallback={<div>Loading...</div>}> 
                    <Switch>
                      <Route exact path='/'>
                        <Home />
                      </Route>
                    </Switch>
                    </Suspense>
              </Container>
      </div>
      </Fragment>
      </Router>
  )

}

export default App;
