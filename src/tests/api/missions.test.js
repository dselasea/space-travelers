import fetchAllMissions from '../../redux/missions/missionsApi';

describe('fetchAllMissions', () => {
  it('successfully fetches all missions', async () => {
    const missions = await fetchAllMissions();
    expect(missions).toHaveLength(10);
  });
});
