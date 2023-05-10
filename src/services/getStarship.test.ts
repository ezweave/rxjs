import {
  ImperialShuttleJSON,
  LukeSkywalkerPeople,
  XWingJSON,
} from './__fixtures__';
import { getStarship } from './getStarship';

describe(getStarship, () => {
  it('gets starships for each url', async () => {
    const mockGet = jest
      .fn()
      .mockResolvedValueOnce({ data: XWingJSON })
      .mockResolvedValueOnce({ data: ImperialShuttleJSON });
    const starships = await Promise.all(
      getStarship(mockGet)(LukeSkywalkerPeople),
    );
    expect(starships).toMatchSnapshot();
  });
});
