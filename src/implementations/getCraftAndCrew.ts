import axios from 'axios';
import { transformAllFieldNamesToCamel } from 'field-caser';
import { map } from 'lodash';

import { getNPeoplePromises } from '@rx-example/services';
import { getStarship } from '@rx-example/services/getStarship';
import { GetCraftAndCrew, People, Starship } from '@rx-example/types';

export const getCraftAndCrew: GetCraftAndCrew = (n, httpGet = axios.get) =>
  Promise.all(
    map(getNPeoplePromises(httpGet)(10), async (peoplePromise) => {
      const personJSON = await peoplePromise;
      const person = <People>transformAllFieldNamesToCamel(personJSON);
      const starshipsJSON = await getStarship(httpGet)(person);
      return map(
        starshipsJSON,
        (starship) => <Starship>transformAllFieldNamesToCamel(starship),
      );
    }),
  );
