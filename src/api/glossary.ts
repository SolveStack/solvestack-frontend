import axios, { AxiosResponse } from 'axios';
import Term from 'types/glossary';

interface ServerResponse {
    data: Term[];
}

export default {
    list(): Promise<AxiosResponse<Term[]>> {
        return axios.get<Array<Term>>('http://localhost:8000/terms/');
    },
};
