import React, { FunctionComponent, useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import api from 'api';
import Stack from 'types/stacks';
import { InitialStack } from 'types/stacks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            background: 'rgb(64, 81, 78)',
        },
    }),
);

const Dendrogram: FunctionComponent = () => {
    const classes = useStyles();
    const stack = api.stacks.get('hEowVJjYagxvhWPNw9HbU5');

    return (
        <div>
            <h2>{stack.name}</h2>
        </div>
    );
};

export default Dendrogram;
