import React, { FunctionComponent } from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpIcon from '@material-ui/icons/Help';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const LinkList: FunctionComponent = () => {
    interface NavigationLink {
        id: number;
        title: string;
        source: string;
        icon: JSX.Element;
    }

    const navigationLinks: Array<NavigationLink> = [
        {
            id: 1,
            title: 'Item',
            source: 'https://www.google.com',
            icon: <BarChartIcon />,
        },
        {
            id: 2,
            title: 'FAQs',
            source: 'https://www.google.com',
            icon: <QuestionAnswerIcon />,
        },
        {
            id: 3,
            title: 'Get Help',
            source: 'https://www.google.com',
            icon: <HelpIcon />,
        },
    ];

    return (
        <List dense>
            {navigationLinks.map((navigationLink: NavigationLink) => (
                <ListItem
                    button
                    href={navigationLink.source}
                    key={navigationLink.id}
                    component="a"
                    title={navigationLink.title}
                    target="_blank"
                    rel="noopener"
                >
                    <ListItemIcon>{navigationLink.icon}</ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography component="div" variant="subtitle1">
                                {navigationLink.title}
                            </Typography>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default LinkList;
