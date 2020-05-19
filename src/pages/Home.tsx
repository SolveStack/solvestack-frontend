// React
import React, { FunctionComponent } from 'react';
// Material-UI Components
import Grid from '@material-ui/core/Grid';
// App Components
import Banner from '../components/Banner';
import Dendrogram from '../components/Dendrogram';

const Home: FunctionComponent = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Banner title="Welcome to SolveStack" subtitle="The most beautiful place online to learn to code" />
            </Grid>
            <Grid item xs={12}>
                <Dendrogram />
            </Grid>
        </Grid>
    );
};

export default Home;
