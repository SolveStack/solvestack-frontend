import axios, { AxiosResponse } from 'axios';
import Term from 'types/glossary';

interface ServerResponse {
    data: Term[];
}

export default {
    list(): Promise<AxiosResponse<Term[]>> {
        return axios.get<Array<Term>>('http://localhost:8000/terms/');
    },
    search(search: string): Promise<AxiosResponse<Term[]>> {
        return axios.get<Array<Term>>(`https://localhost:8000/terms/?name=${search}`);
    }
};
