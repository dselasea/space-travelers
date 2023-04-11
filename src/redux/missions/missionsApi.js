import axios from 'axios';

const apiBase = 'https://api.spacexdata.com/v3/missions';

const fetchAllMissions = async () => {
  const missions = await axios.get(apiBase);
  return missions.data;
};

export default fetchAllMissions;
