import { People } from '@rx-example/types';
import { LukeSkywalkerPeople } from './__fixtures__';
import { getStarshipURLFromPeople } from './getStarshipURLFromPeople';

describe(getStarshipURLFromPeople, () => {
  it('returns an array of starships, if found', () => {
    expect(getStarshipURLFromPeople(LukeSkywalkerPeople)).toEqual(
      LukeSkywalkerPeople.starships,
    );
  });
  it('returns a y-wing if you have no starships', () => {
    const noStarships = {} as unknown as People;
    expect(getStarshipURLFromPeople(noStarships)).toMatchSnapshot();
  });
});
