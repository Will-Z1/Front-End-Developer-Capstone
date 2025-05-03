import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Emily',
    rating: 5,
    comment: 'The food was amazing and the service was excellent! Highly recommend Little Lemon.'
  },
  {
    name: 'Michael',
    rating: 4,
    comment: 'Great atmosphere and delicious Mediterranean dishes. Will come again!'
  },
  {
    name: 'Sophia',
    rating: 5,
    comment: 'Best lemon dessert I have ever had. Friendly staff and cozy place.'
  },
  {
    name: 'David',
    rating: 4,
    comment: 'Fresh ingredients and authentic taste. Loved the Greek salad!'
  }
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h2>Testimonials</h2>
    <div className="testimonials-list">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <div className="testimonial-rating">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
          <p className="testimonial-comment">"{t.comment}"</p>
          <div className="testimonial-name">- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
