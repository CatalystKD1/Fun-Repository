import React, { useState, useEffect } from "react";
import "./FlowerPage.css"; // Make sure you create this CSS file

export default function FlowerPage({ onNext }) {
  const [flowers, setFlowers] = useState([]);
  const [clickedCount, setClickedCount] = useState(0);

  // Spawn a new flower every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (flowers.length < 21) { // limit how many flowers are on screen
        spawnFlower();
      }
    }, 500);

    return () => clearInterval(interval);
  }, [flowers]);

  const spawnFlower = () => {
    const flowerId = Date.now(); // unique id
    const x = Math.random() * 90; // % of screen width
    const y = Math.random() * 80; // % of screen height

    setFlowers((prev) => [...prev, { id: flowerId, x, y }]);
  };

  const handleFlowerClick = (id) => {
    setFlowers((prev) => prev.filter((f) => f.id !== id));
    setClickedCount((prev) => prev + 1);
  };

  return (
    <div className="flower-game-container">
      <h1 className="expo">Since I cannot send you flowers in person. 
        <br />I decided to send them vertually!</h1>
      <h2 className="f-click">Click the Flowers to get your Valentine Flowers.</h2>
      <h3 className="count">Flowers clicked: {clickedCount}</h3>
      {clickedCount >= 20 && (
        <h3 className="More Text">
          Wow babe, that's a lot of flowers!
        </h3>
      )}

      <div className="flower-area">
        {flowers.map((flower) => (
          <span
            key={flower.id}
            className="flower"
            style={{ left: `${flower.x}%`, top: `${flower.y}%` }}
            onClick={() => handleFlowerClick(flower.id)}
          >
            🌸
          </span>
        ))}
      </div>

      {clickedCount >= 10 && (
        <button className="continue-button" onClick={onNext}>
          Continue
        </button>
      )}
    </div>
  );
}
