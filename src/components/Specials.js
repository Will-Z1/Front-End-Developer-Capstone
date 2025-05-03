import React from 'react';
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import './Specials.css';

const specials = [
  {
    img: greekSalad,
    title: 'Greek salad',
    price: '$12.99',
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: bruschetta,
    title: 'Bruschetta',
    price: '$5.99',
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    img: lemonDessert,
    title: 'Lemon Dessert',
    price: '$5.00',
    desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

const Specials = () => (
  <section className="specials-section">
    <div className="specials-header">
      <h2>This weeks specials!</h2>
      <button className="online-menu-btn">Online Menu</button>
    </div>
    <div className="specials-list">
      {specials.map((item, idx) => (
        <div className="special-card" key={idx}>
          <img src={item.img} alt={item.title} />
          <div className="special-card-content">
            <div className="special-card-title">
              <h3>{item.title}</h3>
              <span className="price">{item.price}</span>
            </div>
            <p>{item.desc}</p>
            <a href="#" className="order-link">Order a delivery <span role="img" aria-label="delivery">🚚</span></a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Specials;
