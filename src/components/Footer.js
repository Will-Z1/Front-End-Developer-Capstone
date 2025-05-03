import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>Little Lemon</h4>
      <p>123 Main St, Chicago, IL</p>
      <p>info@littlelemon.com</p>
    </div>
    <div className="footer-section">
      <h4>Navigation</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Follow Us</h4>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
