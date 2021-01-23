// React
import React, { FunctionComponent } from 'react';
// Material-UI Components
import Grid from '@material-ui/core/Grid';
// App Components
import Banner from '../components/Banner';
import Dendrogram from '../components/Dendrogram';
import Module from 'components/Module';

const Home: FunctionComponent = () => {
    return (
        <Grid container spacing={3}>
            <Grid item md={12}>
                <Banner
                    title="Welcome to the SolveStack Demo Site"
                    subtitle="The most beautiful place online to learn to code"
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Dendrogram />
            </Grid>
            <Grid item xs={12} md={4}>
                <Module />
            </Grid>
        </Grid>
    );
};

export default Home;
