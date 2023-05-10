import axios, { Axios } from 'axios';
import { map, range } from 'lodash';

import { People } from '@rx-example/types';

// This creates an array of Promises that will call SWAPI to get people
export const getNPeoplePromises =
  (httpGet: Axios['get'] = axios.get) =>
  (n: number) =>
    map(range(1, n), async (i) => {
      const response = await httpGet<People>(
        `https://swapi.dev/api/people/${i}`,
      );
      return response.data;
    });
