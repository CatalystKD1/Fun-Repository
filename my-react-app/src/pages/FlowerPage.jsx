import React, { useState, useEffect } from "react";
import "./FlowerPage.css";

export default function FlowerPage({ onNext }) {
  const [flowers, setFlowers] = useState([]);
  const [clickedCount, setClickedCount] = useState(0);

  // Better interval: doesn't reset every render
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowers((prev) => {
        if (prev.length >= 21) return prev;

        const flowerId = Date.now() + Math.random(); // extra uniqueness
        const x = Math.random() * 90;
        const y = Math.random() * 80;

        return [...prev, { id: flowerId, x, y }];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleFlowerClick = (id) => {
    setFlowers((prev) => prev.filter((f) => f.id !== id));
    setClickedCount((prev) => prev + 1);
  };

  // Works for click + tap, and prevents double-triggering
  const handleTap = (id, e) => {
    e.preventDefault();
    handleFlowerClick(id);
  };

  return (
    <div className="flower-game-container">
      <h1 className="expo">
        Since I cannot send you flowers in person.
        <br />
        I decided to send them virtually!
      </h1>

      <h2 className="f-click">Click the Flowers to get your Valentine Flowers.</h2>

      <h3 className="count">Flowers clicked: {clickedCount}</h3>

      {clickedCount >= 20 && (
        <h3 className="more-text">Wow babe, that's a lot of flowers!</h3>
      )}

      <div className="flower-area">
        {flowers.map((flower) => (
          <span
            key={flower.id}
            className="flower"
            style={{ left: `${flower.x}%`, top: `${flower.y}%` }}
            onClick={(e) => handleTap(flower.id, e)}
            onTouchStart={(e) => handleTap(flower.id, e)}
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
