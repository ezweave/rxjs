import { get } from 'lodash';

import { People } from '@rx-example/types';

export const getStarshipURLFromPeople = (people: People): string[] =>
  get(people, 'starships', ['https://swapi.dev/api/starships/11/']);
