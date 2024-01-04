import React, { useState, useEffect } from 'react';
import '../Animations.css';

const SimpleAnimationContainer = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      const newPosition = position + direction;

      if (newPosition <= 0 || newPosition >= 180) {
        setDirection(direction * -1);
      } else {
        setPosition(newPosition);
      }
    }, 10);

    return () => clearInterval(animationInterval);
  }, [position, direction]);

  return (
    <div className="simple-box">
      <div className="simple-ball" style={{ top: `${position}px` }}></div>
    </div>
  );
};

export default SimpleAnimationContainer;
