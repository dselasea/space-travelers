import axios from 'axios';

const apiBase = 'https://api.spacexdata.com/v3/rockets';

const fetchAllRockets = async () => {
  const rockets = await axios.get(apiBase);
  const data = rockets.data.map((rocket) => ({
    rocketId: rocket.id,
    rocketName: rocket.rocket_name,
    rocketDescription: rocket.description,
    rocketImage: rocket.flickr_images[0],
  }));
  return data;
};

export default fetchAllRockets;
