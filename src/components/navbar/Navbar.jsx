import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="missions">Mission</NavLink>
    <NavLink to="myprofile">My Profile</NavLink>
  </nav>
);

export default Navbar;
