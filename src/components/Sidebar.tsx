// React
import React, { FunctionComponent, useEffect, useState } from 'react';
// React Router
import { Link } from 'react-router-dom';
// Material-UI Styles
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import { CreateCSSProperties, CSSProperties } from '@material-ui/core/styles/withStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Material-UI Components
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// Material-UI Icons
import CodeIcon from '@material-ui/icons/Code';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HelpIcon from '@material-ui/icons/Help';
// App Components
import ListLinks, { ListLink } from './ListLinks';
// API
import api from 'api';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar as
            | CSSProperties
            | CreateCSSProperties<{}>
            | ((props: {}) => CreateCSSProperties<{}>),
    }),
);

interface SidebarProps {
    isMobile: boolean;
    handleDrawerToggle: () => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ isMobile, handleDrawerToggle }: SidebarProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'));

    const [listLinks, setListLinks] = useState<Array<ListLink>>([]);

    useEffect(() => {
        // fake api that returns a partial list of all stacks {id, name}     stackList: Array<Partial<Stack>>;
        const loadedData = api.stacks.list();

        const linkData = loadedData.map((data) => ({
            id: data.id,
            name: data.name,
            icon:
                // TODO: make this more sustainable
                data.name === 'Basic Website' || data.name === 'Backend/Frontend' ? (
                    <CodeIcon />
                ) : data.name === 'Node 2' ? (
                    <AccountTreeIcon />
                ) : (
                    <HelpIcon />
                ),
            children:
                data.components?.map((childData) => ({ id: childData.id, name: childData.name, open: false })) || [],
            open: false,
        }));

        console.log('------------------------linkData------------------------------');
        console.log(linkData);

        setListLinks(linkData);
    }, []);

    return (
        <nav className={classes.drawer} aria-label="case filters">
            <Drawer
                anchor="left"
                variant={isDesktop ? 'permanent' : 'temporary'}
                open={isDesktop ? true : isMobile}
                onClose={isDesktop ? handleDrawerToggle : handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: isDesktop ? false : true, // Better open performance on mobile.
                }}
            >
                <div>
                    <List dense component="nav" aria-labelledby="list-header">
                        <ListItem>
                            <Link to="/login">
                                <Avatar alt="Username" src=""></Avatar>
                            </Link>
                        </ListItem>
                    </List>
                    <Divider />
                    <ListLinks listLinks={listLinks} setListLinks={setListLinks} />
                </div>
            </Drawer>
        </nav>
    );
};

export default Sidebar;
