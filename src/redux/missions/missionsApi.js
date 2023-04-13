import axios from 'axios';

const apiBase = 'https://api.spacexdata.com/v3/missions';

const fetchAllMissions = async () => {
  const missions = await axios.get(apiBase);
  const data = missions.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return data;
};

export default fetchAllMissions;
