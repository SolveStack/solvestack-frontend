// React
import React, { FunctionComponent, useContext } from 'react';
// React Router
import { Link } from 'react-router-dom';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material-UI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
// Material-UI Icons
import BarChartIcon from '@material-ui/icons/BarChart';
import HelpIcon from '@material-ui/icons/Help';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
// Data Context
import { CoreDataContext } from 'App';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            color: theme.palette.grey['900'],
            textDecoration: 'none',
            backgroundColor: 'none',
            ':hover': {
                textDecoration: 'none',
            },
        },
        listItemContent: {
            position: 'relative',
        },
        bgText: {
            position: 'absolute',
            color: theme.palette.primary.main,
            fontSize: '9px',
            fontWeight: 'bold',
            pointerEvents: 'none',
            '-webkit-transform': 'rotate(-45deg)',
            '-moz-transform': 'rotate(-45deg)',
        },
    }),
);

export interface ListLink {
    id: string;
    name: string;
    icon?: JSX.Element;
    source?: string;
    children?: Array<ListLink>;
}
export const initialListLinkData = {
    id: 0,
    name: '',
    icon: <BarChartIcon />,
    source: '',
    children: [],
};

interface ListLinksProps {
    listLinks: Array<ListLink>;
    type?: 'StackList';
}
const ListLinks: FunctionComponent<ListLinksProps> = ({ listLinks, type = 'StackList' }: ListLinksProps) => {
    const classes = useStyles();
    const [coreData, setCoreData] = useContext(CoreDataContext);

    const handleLinkClick = (linkId: string): void => {
        /* TODO: event.target.value will only return a string with the name of the item clicked
           Need to use the name of the item clicked, to get the id
           and get the parent ids if the link clicked is nested
        */
        if (type === 'StackList') {
            setCoreData((prevValue) => ({
                ...prevValue,
                currentStackPath: ['parent id of link clicked', linkId],
            }));
        }
    };

    return (
        <List dense>
            {listLinks.map((link) => (
                <ListItem
                    button
                    key={link.id}
                    title={link.name}
                    selected={link.id === coreData.currentStackPath[coreData.currentStackPath.length - 1]}
                    onClick={(): void => handleLinkClick(link.id)}
                >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography component="div" variant="subtitle1">
                                {link.name}
                            </Typography>
                        }
                    />
                </ListItem>
            ))}
            <ListItem button title="Aspiring Software Developers" disabled>
                <div className={classes.bgText}>Coming soon!</div>
                <ListItemIcon className={classes.listItemContent}>
                    <ComputerIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography component="div" variant="subtitle2">
                            Aspiring Software Developers
                        </Typography>
                    }
                />
            </ListItem>
            <ListItem button title="Training for Tech Companies" disabled>
                <div className={classes.bgText}>Coming soon!</div>
                <ListItemIcon className={classes.listItemContent}>
                    <BusinessIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography component="div" variant="subtitle1">
                            Training for Tech Companies
                        </Typography>
                    }
                />
            </ListItem>
            <ListItem button title="About the Instructors">
                <ListItemIcon>
                    <YouTubeIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography component="div" variant="subtitle1">
                            About the Instructors
                        </Typography>
                    }
                />
            </ListItem>

            <Link to="/contact" className={classes.link}>
                <ListItem button title="Contact Us">
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography component="div" variant="subtitle1">
                                Contact Us
                            </Typography>
                        }
                    />
                </ListItem>
            </Link>
            <Link to="/glossary" className={classes.link}>
                <ListItem button title="Glossary" disabled>
                    <div className={classes.bgText}>Coming soon!</div>
                    <ListItemIcon className={classes.listItemContent}>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography component="div" variant="subtitle1">
                                Glossary
                            </Typography>
                        }
                    />
                </ListItem>
            </Link>
        </List>
    );
};

export default ListLinks;
