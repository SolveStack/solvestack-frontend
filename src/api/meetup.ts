import Axios, { AxiosResponse } from 'axios';
import { solvestackAPIClient } from './clients';
<<<<<<< HEAD
import Term from 'types/glossary';
/*
export default {
    eventsList(): Promise<AxiosResponse>Term[]> {
      return solvestackAPIClient.get<Array<Term>>(
        'https://api.meetup.com/Solvestack-The-Software-Engineering-Mentorship-Program/events?page=20&status=past,upcoming'
      );
    },
    
}
*/
=======
/*
import Event from '../types/meetupEvents';

export default {
    eventsList(): Promise<AxiosResponse<Event[]>> {
      return solvestackAPIClient.get<Array<Event[]>>('https://api.meetup.com/Solvestack-The-Software-Engineering-Mentorship-Program/events?page=20&status=past,upcoming');
    }
  }
  */
>>>>>>> 7a5c0d5d88b7c9270324f6229a84a2bfb9858a07
