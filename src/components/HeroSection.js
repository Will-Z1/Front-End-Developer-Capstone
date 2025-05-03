import React from 'react';
import heroImg from '../assets/restauranfood.jpg';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <button className="reserve-btn">Reserve a Table</button>
    </div>
    <div className="hero-image">
      <img src={heroImg} alt="Hero" />
    </div>
  </section>
);

export default HeroSection;
