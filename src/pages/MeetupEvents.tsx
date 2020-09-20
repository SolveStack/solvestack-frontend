import React, { FunctionComponent, useEffect, useState } from 'react';
// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// Components
import MediaControlCard from 'components/MediaControlCard';
// API
import api from 'api';
// Types
import Event, { initialEventData } from 'types/meetupEvents';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: theme.spacing(1),
        },
    }),
);

const MeetupEvents: FunctionComponent = () => {
    const classes = useStyles();
    const [events, setEvents] = useState<Event[]>([{ ...initialEventData }]);
    useEffect(() => {
        function loadData(): void {
            setEvents(api.meetup.mockedMeetupEventsList());
        }
        loadData();
    }, []);

    return (
        <>
            <Box>
                <Typography component="h2" variant="h2">
                    Meetup Events
                </Typography>
            </Box>
            {events &&
                events.map((event) => (
                    <div className={classes.card}>
                        <MediaControlCard
                            key={event.id}
                            name={event.name}
                            thumbnailSource={event.featured_photo.photo_link}
                            descriptionHtml={event.description}
                            type="event"
                        />
                    </div>
                ))}
        </>
    );
};

export default MeetupEvents;
