import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import api from 'api';
import Module from 'types/modules';
import { InitialModule } from 'types/modules';

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
    module: Module;
}

const ModuleCard: FunctionComponent = () => {
    const classes = useStyles();
    const module = api.modules.get('SgPw7783b5hD8yrQx4Z7cL');
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
                <Typography className={classes.pos} color="textSecondary">
                    {module.blurb}
                </Typography>
            </CardContent>
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
