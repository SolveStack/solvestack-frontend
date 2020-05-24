import React, { FunctionComponent } from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
            width: 151,
            alignSelf: 'center',
        },
    }),
);

interface MediaControlCardProps {
    name: string;
    blurb: string;
    type: 'article' | 'video';
    thumbnailSource?: string;
}

const MediaControlCard: FunctionComponent<MediaControlCardProps> = ({
    name,
    blurb,
    type,
    thumbnailSource,
}: MediaControlCardProps) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <Box className={classes.box}>
                {type == 'video' ? (
                    <VideoLibraryIcon className={classes.icon} style={{ fontSize: 40 }} />
                ) : (
                    <DescriptionIcon className={classes.icon} style={{ fontSize: 40 }} />
                )}
            </Box>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {thumbnailSource}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {blurb}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default MediaControlCard;
