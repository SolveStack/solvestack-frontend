import axios, { AxiosResponse } from 'axios';
import Term from 'types/glossary';

export default {
    list(): Promise<AxiosResponse<Term[]>> {
        return axios.get<Array<Term>>('http://localhost:8000/terms/');
    },
    search(search: string): Promise<AxiosResponse<Term[]>> {
        return axios.get<Array<Term>>(`http://localhost:8000/terms/?name=${search}`);
    },
};
