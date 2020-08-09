import React, { FunctionComponent, useEffect, useState } from 'react';
// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// Components
import TermCard from 'components/TermCard';
// API
import api from 'api';

import Term, { initialTermData } from 'types/glossary';

const Glossary: FunctionComponent = () => {
    const [terms, setTerms] = useState<Term[]>([{ ...initialTermData }]);
    useEffect(() => {
        function loadData(): void {
            api.glossary.list().then((response) => {
                setTerms(response.data);
            });
        }
        loadData();
    }, []);

    return (
        <>
            <Box>
                <Typography component="h2" variant="h2">
                    Glossary
                </Typography>
            </Box>
            {terms && terms.map((term) => <TermCard key={term.id} term={term}></TermCard>)}
        </>
    );
};

export default Glossary;
