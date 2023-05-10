import axios, { Axios } from 'axios';
import { flow } from 'lodash';
import { map as mapFP } from 'lodash/fp';

import { People } from '@rx-example/types';

import { getStarshipURLFromPeople } from './getStarshipURLFromPeople';

interface GetStarship {
  (person: People): Promise<any>[];
}

export const getStarship = (httpGet: Axios['get'] = axios.get): GetStarship =>
  flow(
    getStarshipURLFromPeople,
    mapFP(async (url: string) => {
      const starship = await httpGet<any>(url);
      return starship.data;
    }),
  );
