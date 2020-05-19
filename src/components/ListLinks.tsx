// React
import React, { FunctionComponent, useContext } from 'react';
// Material-UI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
// Material-UI Icons
import BarChartIcon from '@material-ui/icons/BarChart';
// Data Context
import { CoreDataContext } from '../App';

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
        </List>
    );
};

export default ListLinks;
