import React from 'react';
import './Card.css';

const Card = ({ imageSrc, description, link }) => {
  const originOfPage = window.location.origin
  const originOfCard = new URL(link).origin

  return (
    <div className="card">
      <a className="card-link" href={`${link}`} target={originOfPage === originOfCard ? '' : '_blank'}>
        <img src={imageSrc} alt="card" className="card-image" />
        <div className="card-description">{description}</div>
      </a>
    </div>
  );
};

export default Card;
