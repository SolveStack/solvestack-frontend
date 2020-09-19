import React, { FunctionComponent, useEffect, useState } from 'react';
// Material UI
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

const Glossary: FunctionComponent = () => {
    const [query, setQuery] = useState<string>('');
    const [terms, setTerms] = useState<Term[]>([{ ...initialTermData }]);
    useEffect(() => {
        function loadData(): void {
            api.glossary.list().then((response) => {
                setTerms(response.data);
            });
        }
        loadData();
    }, []);

    const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>): void => {
        const target = e.target;
        const value = target.value;
        setQuery(value);
    };

    useEffect(() => {
        const listener = (event: KeyboardEvent): void => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                api.glossary.search(query).then((response) => {
                    setTerms(response.data);
                });
            }
        };
        document.addEventListener('keydown', listener);
        return (): void => {
            document.removeEventListener('keydown', listener);
        };
    }, [query]);

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
                            onChange={handleChange()}
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
