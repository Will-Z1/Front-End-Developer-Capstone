import React from 'react';
import logo from '../assets/Logo.svg';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="Little Lemon Logo" />
      <span>Little Lemon</span>
    </div>
    <ul className="navbar-menu">
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Reservations</li>
      <li>Order Online</li>
      <li>Login</li>
    </ul>
  </nav>
);

export default NavBar;
