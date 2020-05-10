import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinkList from './LinkList';

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
          }
    })
)


interface SidebarProps {
    isMobile: boolean;
    handleDrawerToggle: () => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ isMobile, handleDrawerToggle}: SidebarProps) => {
const classes = useStyles();
const theme = useTheme();
const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <nav className={classes.drawer} aria-label="case filters">
          <Drawer anchor='left'
          variant={ isDesktop ? 'permanent' : 'temporary'}
            open={ isDesktop ? true : isMobile}
            onClose={ isDesktop ? handleDrawerToggle : handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: isDesktop ? false : true, // Better open performance on mobile.
            }}
          > 
          <LinkList/>
          </Drawer>
      </nav>
    )
}

export default Sidebar;