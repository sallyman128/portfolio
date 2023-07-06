import React from 'react';
import './Card.css';

const Card = ({ imageSrc, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="card" className="card-image" />
      <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;
