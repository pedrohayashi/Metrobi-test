import React, { useState, useEffect } from 'react';
import './App.css';

function ZenosParadox() {
  const [achillesPosition, setAchillesPosition] = useState(0);  // Achilles starts at 0%
  const [tortoisePosition, setTortoisePosition] = useState(10); // Tortoise starts at 10%
  const [distance, setDistance] = useState(tortoisePosition - achillesPosition);
  const [running, setRunning] = useState(true);

  const achillesSpeedFactor = 0.5; // Achilles moves halfway towards Tortoise each step
  const tortoiseSpeed = 2;         // Tortoise moves forward by a constant amount

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      // Move Achilles halfway towards the Tortoise
      setAchillesPosition(prev => prev + distance * achillesSpeedFactor);
      
      // Move Tortoise forward by constant speed if within bounds
      setTortoisePosition(prev => {
        const newPosition = prev + tortoiseSpeed;
        if (newPosition >= 100) {
          setRunning(false);  // Stop animation if Tortoise reaches 100%
          return 100;         // Set Tortoise position to exactly 100%
        }
        return newPosition;
      });

      // Update distance to reflect new positions
      setDistance(tortoisePosition - achillesPosition);

    }, 500); // 500ms interval for animation

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, [achillesPosition, tortoisePosition, distance, running]);

  const resetAnimation = () => {
    setAchillesPosition(0);
    setTortoisePosition(10); // Reset tortoise start position
    setDistance(10);
    setRunning(true);
  };

  return (
    <div className="container">
      <h2>Zeno's Paradox: Achilles and the Tortoise</h2>
      <div className="track">
        {/* Tortoise */}
        <div className="character tortoise" style={{ left: `${tortoisePosition}%` }}>
          🐢
        </div>
        {/* Achilles */}
        <div className="character achilles" style={{ left: `${achillesPosition}%` }}>
          🏃
        </div>
      </div>
      <div className="info">
        <p>Achilles Position: {achillesPosition.toFixed(2)}%</p>
        <p>Tortoise Position: {tortoisePosition.toFixed(2)}%</p>
        <p>Distance to Tortoise: {distance.toFixed(2)}%</p>
      </div>
      <button onClick={resetAnimation} className="reset-button">Reset</button>
    </div>
  );
}

export default ZenosParadox;
