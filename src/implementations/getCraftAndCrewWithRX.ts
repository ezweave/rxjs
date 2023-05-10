import axios from 'axios';
import { transformAllFieldNamesToCamel } from 'field-caser';
import { map, mergeAll, mergeMap, zip } from 'rxjs';

import { getNPeoplePromises } from '@rx-example/services';
import { getStarship } from '@rx-example/services/getStarship';
import { People, Starship } from '@rx-example/types';

export const getCraftAndCrewRX = (n, httpGet = axios.get) =>
  new Promise((resolve) =>
    zip(...getNPeoplePromises(httpGet)(n))
      .pipe(
        map((person) => <People>transformAllFieldNamesToCamel(person)),
        map(getStarship(httpGet)),
        mergeAll(),
        mergeMap(async (starshipPromise) => {
          const starship = await starshipPromise;
          return <Starship>transformAllFieldNamesToCamel(starship);
        }),
      )
      .subscribe(resolve),
  );
