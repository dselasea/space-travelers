import axios from 'axios';

const apiBase = 'https://api.spacexdata.com/v3/rockets';

const fetchAllRockets = async () => {
  const rockets = await axios.get(apiBase);
  const data = rockets.data.map((rocket) => ({
    rocket_id: rocket.id,
    rocket_name: rocket.rocket_name,
    rocket_description: rocket.description,
    rocket_image: rocket.flickr_images[0]
  }));
  return data;
};

export default fetchAllRockets;
