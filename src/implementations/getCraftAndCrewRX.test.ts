import { getCraftAndCrewRX } from './getCraftAndCrewWithRX';

describe(getCraftAndCrewRX, () => {
  it('gets nnn', async () => {
    const stuff = await getCraftAndCrewRX(2);
    expect(stuff).toMatchSnapshot();
  });
});
