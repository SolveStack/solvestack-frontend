// React
import React, { FunctionComponent, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
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
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
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
    open?: boolean;
}
export const initialListLinkData: ListLink = {
    id: '0',
    name: '',
    icon: <BarChartIcon />,
    source: '',
    children: [],
    open: false,
};

interface ListLinksProps {
    listLinks: Array<ListLink>;
    setListLinks: Dispatch<SetStateAction<Array<ListLink>>>;
    type?: 'StackList';
}

interface OpenedLink {
    id: string;
    open: boolean;
}

const ListLinks: FunctionComponent<ListLinksProps> = ({
    listLinks,
    setListLinks,
    type = 'StackList',
}: ListLinksProps) => {
    const classes = useStyles();
    const [coreData, setCoreData] = useContext(CoreDataContext);
    const [listLinkItemsOpen, setListLinkItemsOpen] = useState<Array<OpenedLink>>([]);
    const [subLevel1Opened, setSubLevel1Opened] = useState<any>({ id: 0, isOpened: false });

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
        console.log(`openedLinks: `, openedLinks);
        console.log(`listLinks: `, listLinks);
        // Base case
        // Empty arrrays aren't equivalent to each other
        // so listLinkItems === [] will always return false
        // an array is empty when it's length === 0
        // an array doesn't exists if it's length is -1
        // below we check if the array has a positive length
        if (!listLinkItemsOpen.length) {
            console.log('base case');
            setListLinkItemsOpen((prevValue) => openedLinks);
        }
        console.log(`listLinkItemsOpen: `, listLinkItemsOpen);
    }, [listLinkItemsOpen, listLinks]);

    const handleLinkClick = (linkIds: Array<string>): void => {
        console.log(`linkIds: `,linkIds);
        const lastIndex = linkIds.length - 1;
        console.log(`linkIds[lastIndex]: `,linkIds[lastIndex]);

        setListLinks((prevValue) => {
            if (linkIds.length === 1) {
                // if the listIds array only contains one item, then toggle the open value of the parent level
                return prevValue.map((listLink) =>
                    listLink.id === linkIds[0] ? { ...listLink, open: !listLink.open } : listLink,
                );
            } else if (linkIds.length === 2) {
                // if there are two items in the array, toggle the open value of the child level that contains the same id
                // as the last item in the array.
                // this works because the child levels are only accessible when the corresponding parent is open
                const link = prevValue.find((listLink) => listLink.id === linkIds[0]) || initialListLinkData;
                if (link.children && link.children.length) {
                    return prevValue.map((listLink) =>
                        listLink.id === linkIds[0]
                            ? {
                                  ...listLink,
                                  children: (listLink.children as Array<ListLink>).map((childLink) =>
                                      childLink.id === linkIds[1] ? { ...childLink, open: !childLink.open } : childLink,
                                  ),
                              }
                            : listLink,
                    );
                }
            }

            return prevValue;
        });

        if (type === 'StackList') {
            // setListLinkItemsOpen((prevValue) => {
            //     const newValue = prevValue;
            //     console.log(newValue);
            //     const elementToChange = newValue.find((element) => element.id === linkIds[lastIndex]);
            //     if (elementToChange) elementToChange.open = true;
            //     console.log(elementToChange);
            //     console.log(newValue);
            //     return newValue;
            // });
            setCoreData((prevValue) => ({
                ...prevValue,
                currentStackPath: linkIds,
            }));
            // setCoreData isn't synchronous so if we console.log the value here, it will return the previous results
            //  console.log(coreData);
        }
    };

    return (
        <List dense component="nav" aria-labelledby="list-header">
            {listLinks.map((topLink) => (
                <React.Fragment key={topLink.id}>
                    <ListItem
                        //button
                        key={topLink.id}
                        title={topLink.name}
                        selected={topLink.id === coreData.currentStackPath[0]}
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
                        {/* {topLink.open ? <ExpandLess /> : <ExpandMore />} */}
                    </ListItem>
                    {topLink.children?.map((childLevel1) => (
                        <Collapse in={topLink.open} timeout="auto" unmountOnExit key={childLevel1.id}>
                            <List component="div" disablePadding dense>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    selected={topLink.id === coreData.currentStackPath[1]}
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
            <Link to="/aspiring-software-developers" className={classes.link}>
                <ListItem button title="Aspiring Software Developers">
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
            </Link>

            <Link to="/training" className={classes.link}>
              <ListItem button title="Training for Tech Companies">
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
            </Link>
            <Link to="/about-instructors" className={classes.link}>
                <ListItem button title="About the Instructors">
                    <ListItemIcon className={classes.listItemContent}>
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
            </Link>
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
            <Link to="/testimonials" className={classes.link}>
                <ListItem button title="Testimonials">          
                    <ListItemIcon className={classes.listItemContent}>
                        <SentimentSatisfiedAltIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography component="div" variant="subtitle1">
                                Testimonials
                            </Typography>
                        }
                    />
                </ListItem>
            </Link>
        </List>
    );
};

export default ListLinks;
