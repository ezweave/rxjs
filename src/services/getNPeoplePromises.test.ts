import { LukeSkywalker } from './__fixtures__';
import { getNPeoplePromises } from './getNPeoplePromises';

describe(getNPeoplePromises, () => {
  it('returns a people reference', async () => {
    const mockGet = jest.fn().mockResolvedValue({
      data: LukeSkywalker,
    });

    const people = await Promise.all(getNPeoplePromises(mockGet)(3));
    expect(people).toMatchSnapshot();
  });
});
