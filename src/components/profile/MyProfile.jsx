import React from 'react';
import { useSelector } from 'react-redux';
import ProfileData from './ProfileData';
import './MyProfile.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);
  return (
    <div className="p-5 m-auto profile-page">
      <div className="row">
        <ProfileData missions={missions} rockets={rockets} />
      </div>
    </div>
  );
};

export default MyProfile;
