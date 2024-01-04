import React, { useState, useEffect } from 'react';

const AnimationContainer = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      // Update position based on the direction
      const newPosition = position + direction * 1;

      // If the ball reaches the top or bottom, change direction
      if (newPosition === 0 || newPosition === 180) {
        setDirection(direction * -1);
        setPosition(newPosition)
      } else {
        setPosition(newPosition);
      }
    }, 10);

    return () => clearInterval(animationInterval); // Cleanup interval on component unmount
  }, [position, direction]);

  return (
    <div style={{ position: 'relative', height: '200px', width: '200px', border: '1px solid #ddd', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: `${position}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'blue',
        }}
      ></div>
    </div>
  );
};

export default AnimationContainer;
