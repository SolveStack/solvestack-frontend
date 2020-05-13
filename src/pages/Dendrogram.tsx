import React, { FunctionComponent, useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import api from 'api';
import Stack from 'types/stacks';
import { InitialStack } from 'types/stacks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        caseSearchPaper: {
            padding: theme.spacing(4),
        },
        gridPaper: {
            padding: theme.spacing(4),
            minHeight: '29rem',
        },
    }),
);

class Dendrogram extends React.Component<{}, { stack: Stack }> {
    //const classes = useStyles();

    constructor(props: any) {
        super(props);
        this.state = { stack: InitialStack };
    }
    componentDidMount() {
        const loadedStack = api.stacks.get('hEowVJjYagxvhWPNw9HbU5');
        console.log(loadedStack);
        this.setState({ stack: loadedStack });
    }

    render() {
        return (
            <div>
                <h2>{this.state.stack.name}</h2>
            </div>
        );
    }
}

export default Dendrogram;
