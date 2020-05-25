// React
import React, { FunctionComponent, useContext, useState, useEffect } from 'react';
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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
// Material-UI Icons
import BarChartIcon from '@material-ui/icons/BarChart';
import HelpIcon from '@material-ui/icons/Help';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// Data Context
import { CoreDataContext } from 'App';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
        },
        link: {
            color: theme.palette.grey['900'],
            textDecoration: 'none',
            backgroundColor: 'none',
            ':hover': {
                textDecoration: 'none',
            },
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export interface ListLink {
    id: string;
    name: string;
    icon?: JSX.Element;
    source?: string;
    children?: Array<ListLink>;
    open?: boolean;
}
export const initialListLinkData = {
    id: 0,
    name: '',
    icon: <BarChartIcon />,
    source: '',
    children: [],
    open: false,
};

interface ListLinksProps {
    listLinks: Array<ListLink>;
    type?: 'StackList';
}

interface OpenedLink {
    id: string;
    open: boolean;
}

const ListLinks: FunctionComponent<ListLinksProps> = ({ listLinks, type = 'StackList' }: ListLinksProps) => {
    const classes = useStyles();
    const [coreData, setCoreData] = useContext(CoreDataContext);
    const [listLinkItemsOpen, setListLinkItemsOpen] = useState<Array<OpenedLink>>([]);

    useEffect(() => {
        const openedLinks: Array<OpenedLink> = listLinks
            .map((link) => {
                const array1: Array<OpenedLink> = [{ id: link.id, open: false }];
                const array2: Array<OpenedLink> | undefined = link.children?.map((child) => ({
                    id: child.id,
                    open: false,
                }));
                if (array2 != null) {
                    return array1.concat(array2);
                }
                return array1;
            })
            .flat();
        console.log(openedLinks);
        // Base case
        if (listLinkItemsOpen === []) {
            console.log('base case');
            setListLinkItemsOpen((prevValue) => openedLinks);
        }
        console.log(listLinkItemsOpen);
    }, [listLinkItemsOpen, listLinks]);

    const handleLinkClick = (linkIds: Array<string>): void => {
        console.log(linkIds);
        const lastIndex = linkIds.length - 1;
        console.log(linkIds[lastIndex]);
        if (type === 'StackList') {
            setListLinkItemsOpen((prevValue) => {
                const newValue = prevValue;
                console.log(newValue);
                const elementToChange = newValue.find((element) => element.id === linkIds[lastIndex]);
                if (elementToChange) elementToChange.open = true;
                console.log(elementToChange);
                console.log(newValue);
                return newValue;
            });
            setCoreData((prevValue) => ({
                ...prevValue,
                currentStackPath: linkIds,
            }));
            console.log(coreData);
        }
    };

    return (
        <List dense>
            {listLinks.map((topLink) => (
                <React.Fragment key={topLink.id}>
                    <ListItem
                        button
                        key={topLink.id}
                        title={topLink.name}
                        selected={topLink.id === coreData.currentStackPath[coreData.currentStackPath.length - 1]}
                        onClick={(): void => handleLinkClick([topLink.id])}
                    >
                        <ListItemIcon>{topLink.icon}</ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography component="div" variant="subtitle1">
                                    {topLink.name}
                                </Typography>
                            }
                        />
                        {topLink.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    {topLink.children?.map((childLevel1) => (
                        <Collapse in={topLink.open} timeout="auto" unmountOnExit key={childLevel1.id}>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={(): void => handleLinkClick([topLink.id, childLevel1.id])}
                                >
                                    <ListItemIcon>
                                        <AccountTreeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={childLevel1.name} />
                                </ListItem>
                            </List>
                        </Collapse>
                    ))}
                </React.Fragment>
            ))}
            <ListItem button title="Aspiring Software Developers">
                <ListItemIcon>
                    <ComputerIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography component="div" variant="subtitle1">
                            Aspiring Software Developers
                        </Typography>
                    }
                />
            </ListItem>
            <ListItem button title="Training for Tech Companies">
                <ListItemIcon>
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
            <Link to="/contact" className={classes.link}>
                <ListItem button title="Help">
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography component="div" variant="subtitle1">
                                Help
                            </Typography>
                        }
                    />
                </ListItem>
            </Link>
        </List>
    );
};

export default ListLinks;
