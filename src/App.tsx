// React
import React, {
    FunctionComponent,
    Fragment,
    useState,
    lazy,
    Suspense,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { CreateCSSProperties, CSSProperties } from '@material-ui/core/styles/withStyles';
// Material-UI Elements
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// Helper Functions
import ScrollToTop from 'util/ScrollToTop';
// App Components
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
// Custom Types
import AppData, { initialAppData } from 'types/AppData';
import CoreData, { initialCoreData } from 'types/CoreData';

export const CoreDataContext = createContext<[CoreData, Dispatch<SetStateAction<CoreData>>]>([
    { ...initialCoreData },
    (): CoreData => ({ ...initialCoreData }),
]);

const drawerWidth = 240;
const Home = lazy(() => import('./pages/Home'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

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
            marginRight: theme.spacing(1),
        },
        main: {
            flexGrow: 1,
            padding: theme.spacing(3),
            display: 'flex',
            marginTop: '4rem',
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                marginTop: '3.5rem',
            },
            marginBottom: '1rem',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar as
            | CSSProperties
            | CreateCSSProperties<{}>
            | ((props: {}) => CreateCSSProperties<{}>),
    }),
);

const App: FunctionComponent = () => {
    const classes = useStyles();

    const [appData, setAppData] = useState<AppData>({ ...initialAppData });
    const [coreData, setCoreData] = useState<CoreData>({ ...initialCoreData });

    const handleDrawerToggle = (): void => {
        setAppData((prevValue) => ({ ...prevValue, isMobile: !prevValue.isMobile }));
    };

    return (
        <Router>
            <ScrollToTop />
            <CssBaseline />
            <Fragment>
                <Navbar handleDrawerToggle={handleDrawerToggle} />
                <CoreDataContext.Provider value={[coreData, setCoreData]}>
                    <Sidebar isMobile={appData.isMobile} handleDrawerToggle={handleDrawerToggle} />
                    <div role="main" className={classes.main}>
                        <div className={classes.toolbar} />
                        <Container maxWidth="xl" disableGutters>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Suspense
                                        fallback={
                                            <Typography component="p" variant="body1">
                                                {"We're making something special for you..."}
                                            </Typography>
                                        }
                                    >
                                        <Switch>
                                            <Route exact path="/">
                                                <Home />
                                            </Route>
                                            <Route exact path="/contact"></Route>
                                            <Route exact path="/terms">
                                                <TermsAndConditions />
                                            </Route>
                                            <Route exact path="/privacy">
                                                <PrivacyPolicy />
                                            </Route>
                                        </Switch>
                                    </Suspense>
                                </Grid>
                            </Grid>

                            <Footer></Footer>
                        </Container>
                    </div>
                </CoreDataContext.Provider>
            </Fragment>
        </Router>
    );
};

export default App;
