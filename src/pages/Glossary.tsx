import React, { FunctionComponent, useEffect, useState } from 'react';
// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Components
import TermCard from 'components/TermCard';
// API
import api from 'api';

import Term, { initialTermData } from 'types/glossary';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'absolute',
            right: 20,
        },
    }),
);

const Glossary: FunctionComponent = () => {
    const classes = useStyles();
    const [terms, setTerms] = useState<Term[]>([{ ...initialTermData }]);
    useEffect(() => {
        function loadData(): void {
            api.glossary.list().then((response) => {
                setTerms(response.data);
            });
        }
        loadData();
    }, []);

    const search = (query: string): void => {
        api.glossary.search(query).then((response) => {
            setTerms(response.data);
        });
    }
    return (
        <>
            <Box>
                <Typography component="h2" variant="h2">
                    Glossary
                </Typography>
                <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={terms.map((term) => term.name)}
        renderInput={(params): JSX => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
                <TextField className={classes.search} id="standard-basic"></TextField>
            </Box>
            {terms && terms.map((term) => <TermCard key={term.id} term={term}></TermCard>)}
        </>
    );
};

export default Glossary;
