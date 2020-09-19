import React, { FunctionComponent, useContext } from 'react';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// Material UI Components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Material UI Icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// App components and api
import api from 'api';
import Module from 'types/modules';
import Component, { InitialComponent } from 'types/stacks';
// Data Context
import { CoreDataContext } from 'App';

import MediaControlCard from './MediaControlCard';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

interface MediaProps {
    module: Module | Component;
}

const ModuleCard: FunctionComponent = () => {
    const classes = useStyles();
    const [coreData, setCoreData] = useContext(CoreDataContext);
    const module =
        api.stacks
            .get(coreData.currentStackPath[0])
            .components.find((component) => component.id == coreData.currentStackPath[1]) || InitialComponent;

    const Blurb: FunctionComponent<MediaProps> = ({ module }: MediaProps) => (
        <MediaControlCard key={module.id} name={module.name} blurb={module.blurb} type="article" />
    );

    const Articles: FunctionComponent<MediaProps> = ({ module }: MediaProps) => (
        <>
            {module.articles.map((article) => (
                <MediaControlCard key={article.id} name={article.name} blurb={article.blurb} type="article" />
            ))}
        </>
    );

    const Videos: FunctionComponent<MediaProps> = ({ module }: MediaProps) => (
        <>
            {module.videos.map((video) => (
                <MediaControlCard key={video.id} name={video.name} blurb={video.blurb} type="video" />
            ))}
        </>
    );
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h1">
                    {module.name}
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                    {module.blurb}
                </Typography> */}
            </CardContent>
            <Blurb module={module} />
            <Articles module={module} />
            <Videos module={module} />
            <CardActions>
                <Button size="small">
                    Next Module <NavigateNextIcon></NavigateNextIcon>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ModuleCard;
