import React, { FunctionComponent } from 'react';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TermType from 'types/glossary';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: theme.spacing(4),
        },
    }),
);

type TermProps = {
    term: TermType;
};

const TermCard: FunctionComponent<TermProps> = ({ term }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2" color="textSecondary">
                    {term.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {term.definition}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TermCard;
