import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  console.log(missions);

  return (
    <div className="p-5 m-auto profile-page">
      <div className="row">
        <div className="col-md-6 col-12">
          <h2 className="h4">My Missions</h2>
          <div className="card my-4">
            <ul className="list-group list-group-flush">
              {missions.filter((mission) => mission.reserved).map((mission) => (
                <li className="list-group-item" key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <h2 className="h4">My Rockets</h2>
          <div className="card my-4">
            <ul className="list-group list-group-flush">
              {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
                <li className="list-group-item" key={rocket.rocketId}>{rocket.rocketName}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
