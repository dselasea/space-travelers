import React from 'react';
import planetImage from '../../assets/images/planet.png';
import './Header.css';
import Navbar from '../navbar/Navbar';

const Header = () => (
  <header>
    <div className="logo">
      <img src={planetImage} alt="planet" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <Navbar />
  </header>
);

export default Header;
