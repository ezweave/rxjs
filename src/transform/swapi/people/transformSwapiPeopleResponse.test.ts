import { transformSwapiPeopleResponse } from './transformSwapiPeopleResponse';
import LarsOwenJSON from '@rx-example/__fixtures__/swapi/people/lars-owen.json';

describe(transformSwapiPeopleResponse, () => {
  it('converts an axios response appropriately', () => {
    expect(transformSwapiPeopleResponse(LarsOwenJSON)).toMatchSnapshot();
  });
});
