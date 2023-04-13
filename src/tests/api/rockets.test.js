import fetchAllRockets from '../../redux/rockets/rocketsApi';

describe('fetchAllRockets', () => {
  it('successfully fetches all rockets', async () => {
    const rockets = await fetchAllRockets();
    expect(rockets).toHaveLength(4);
  });
});
