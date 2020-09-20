import React, { FunctionComponent } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        box: {
            borderColor: 'primary',
        },
        icon: {
            width: 50,
            position: 'relative',
            top: '12px',
            left: '12px',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: 'auto 1',
        },
        thumbnail: {
            width: 400,
            padding: '10px',
        },
    }),
);

interface MediaControlCardProps {
    name: string;
    blurb?: string;
    type: 'article' | 'video' | 'event';
    descriptionHtml?: string;
    thumbnailSource?: string;
}

const MediaControlCard: FunctionComponent<MediaControlCardProps> = ({
    name,
    blurb,
    type,
    descriptionHtml,
    thumbnailSource,
}: MediaControlCardProps) => {
    const classes = useStyles();
    const Description: FunctionComponent = () => <div dangerouslySetInnerHTML={{ __html: descriptionHtml! }} />;
    const Image: FunctionComponent = () => {
        if (type === 'video') {
            return <VideoLibraryIcon className={classes.icon} style={{ fontSize: 40 }} />;
        } else if (type === 'event') {
            return <CardMedia className={classes.thumbnail} src={thumbnailSource} component="img" />;
        } else {
            return <DescriptionIcon className={classes.icon} style={{ fontSize: 40 }} />;
        }
    };

    return (
        <Card className={classes.root}>
            <Box className={classes.box}>
                <Image />
            </Box>

            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {name}
                    </Typography>
                    {blurb && (
                        <Typography variant="body2" color="textSecondary">
                            {blurb}
                        </Typography>
                    )}
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {descriptionHtml && <Description />}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default MediaControlCard;
