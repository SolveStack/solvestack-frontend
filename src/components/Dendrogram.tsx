// React
import React, { FunctionComponent, useEffect, useState } from 'react';
// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material-UI Elements
import Paper from '@material-ui/core/Paper';
// AMCharts
import * as am4core from '@amcharts/amcharts4/core';
// eslint-disable-next-line @typescript-eslint/camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// eslint-disable-next-line @typescript-eslint/camelcase
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import { Typography } from '@material-ui/core';
// API
import api from '../api';
// Custom Types
import Stack, { InitialStack } from '../types/stacks';
// AMCharts Theme
am4core.useTheme(am4themes_animated);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chart: {
            width: '100%',
            height: '500px',
            border: '1rem solid teal',
            background: 'linear-gradient(130deg, rgba(0,0,0,1) 10%, rgba(255,115,161,1) 100%)',
        },
        paper: {
            padding: theme.spacing(4),
        },
    }),
);

const Dendrogram: FunctionComponent = () => {
    const classes = useStyles();

    const [currentStack, setCurrentStack] = useState<Stack>({ ...InitialStack });

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const chart = am4core.create('chart', am4plugins_forceDirected.ForceDirectedTree);
        // eslint-disable-next-line @typescript-eslint/camelcase
        const networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
        const loadedStack = api.stacks.get('hEowVJjYagxvhWPNw9HbU5');

        chart.data = [
            {
                name: loadedStack.name,
                children: loadedStack.components.map((component) => ({
                    name: component.name,
                    children: component.technologies.map((technology) => ({
                        name: technology.name,
                        value: Math.floor(Math.random() * 500) + 30,
                    })),
                    value: component.technologies.length ? undefined : Math.floor(Math.random() * 150) + 30,
                })),
            },
        ];

        networkSeries.dataFields.value = 'value';
        networkSeries.dataFields.name = 'name';
        networkSeries.dataFields.children = 'children';
        networkSeries.nodes.template.tooltipText = '{name}:{value}';
        networkSeries.nodes.template.fillOpacity = 1;

        networkSeries.nodes.template.label.text = '{name}';
        networkSeries.fontSize = 10;
        networkSeries.minRadius = 15;
        networkSeries.maxRadius = 40;

        networkSeries.links.template.strokeWidth = 1;

        const hoverState = networkSeries.links.template.states.create('hover');
        hoverState.properties.strokeWidth = 3;
        hoverState.properties.strokeOpacity = 1;

        networkSeries.nodes.template.events.on('over', function (event) {
            event.target.dataItem.childLinks.each(function (link) {
                link.isHover = true;
            });
            if (event.target.dataItem.parentLink) {
                event.target.dataItem.parentLink.isHover = true;
            }
        });

        networkSeries.nodes.template.events.on('out', function (event) {
            event.target.dataItem.childLinks.each(function (link) {
                link.isHover = false;
            });
            if (event.target.dataItem.parentLink) {
                event.target.dataItem.parentLink.isHover = false;
            }
        });

        setCurrentStack(loadedStack);
    }, []);

    return (
        <Paper elevation={20} className={classes.paper}>
            <Typography component="h2" variant="h2">
                {`Let's Make a ${currentStack.name}`}
            </Typography>
            <div id="chart" className={classes.chart}></div>
        </Paper>
    );
};

export default Dendrogram;
