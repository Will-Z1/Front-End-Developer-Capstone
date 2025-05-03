import React from 'react';
import aboutImg from '../assets/restaurant.jpg';
import './About.css';

const About = () => (
  <section className="about-section">
    <div className="about-content">
      <h2>About Little Lemon</h2>
      <p>Little Lemon is a family-owned Mediterranean restaurant, located in Chicago. We focus on traditional recipes served with a modern twist. Our chefs use only the freshest ingredients to create delicious and authentic dishes for our guests.</p>
    </div>
    <div className="about-image">
      <img src={aboutImg} alt="About Little Lemon" />
    </div>
  </section>
);

export default About;
