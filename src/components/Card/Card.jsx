import React from 'react';
import './Card.css';

const Card = ({ imageSrc, description, githubLink }) => {
  return (
    <div className="card">
      <a className="github-link" href="https://github.com/sallyman128/final_project_lms/" target='_blank'>
        <img src={imageSrc} alt="card" className="card-image" />
        <div className="card-description">{description}</div>
      </a>
    </div>
  );
};

export default Card;
