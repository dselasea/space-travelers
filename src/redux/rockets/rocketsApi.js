import axios from 'axios';

const apiBase = 'https://api.spacexdata.com/v3/rockets';

const fetchAllRockets = async () => {
  const rockets = await axios.get(apiBase);
  const data = rockets.data.map((rocket) => ({
    rocket_id: rocket.rocket_id,
    rocket_name: rocket.rocket_name,
    rocket_description: rocket.rocket_description,
    rocket_image: rocket.flickr_images,
  }));
  return data;
};

export default fetchAllRockets;
