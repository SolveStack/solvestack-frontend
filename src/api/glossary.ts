import { AxiosResponse } from 'axios';
import { solvestackAPIClient } from './clients';
import Term from 'types/glossary';

export default {
    list(): Promise<AxiosResponse<Term[]>> {
        return solvestackAPIClient.get<Array<Term>>('http://localhost:8000/terms/');
    },
    search(search: string): Promise<AxiosResponse<Term[]>> {
        return solvestackAPIClient.get<Array<Term>>(`http://localhost:8000/terms/?name=${search}`);
    },
};