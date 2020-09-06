import React, { FunctionComponent, useEffect, useState } from 'react';
// Material UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// Components
import TermCard from 'components/TermCard';
// API
import api from 'api';
// Types
import Term, { initialTermData } from 'types/glossary';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'absolute',
            right: 20,
        },
    }),
);

interface searchQuery {
    value: string | any;
}

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

    const search = (query: string | any): void => {
        api.glossary.search(query).then((response) => {
            setTerms(response.data);
        });
    };

    return (
        <>
            <Box>
                <Typography component="h2" variant="h2">
                    Glossary
                </Typography>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={terms.map((term) => term.name)}
                    renderInput={(
                        params: JSX.IntrinsicAttributes & import('@material-ui/core/TextField').StandardTextFieldProps,
                    ): JSX.Element => (
                        <TextField
                            {...params}
                            label="Search input"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                            id="standard-basic"
                        />
                    )}
                />
            </Box>
            {terms && terms.map((term) => <TermCard key={term.id} term={term}></TermCard>)}
        </>
    );
};

export default Glossary;
