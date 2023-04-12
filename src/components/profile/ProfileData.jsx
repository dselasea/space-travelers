import React from 'react';
import PropTypes from 'prop-types';

const ProfileData = ({ missions, rockets }) => (
  <>
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
  </>
);

ProfileData.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocketId: PropTypes.number.isRequired,
      rocketName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileData;
