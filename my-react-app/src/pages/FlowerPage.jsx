import { useEffect, useState } from "react";

function FlowerPage({ onNext }) {
  const [flowers, setFlowers] = useState([]);
  const [count, setCount] = useState(0);

  // Spawn flowers every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      createFlower();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    const createFlower = () => {
    const id = Date.now() + Math.random();

    const flowerSize = 40; // approximate max grown size

    const maxX = window.innerWidth - flowerSize;
    const maxY = window.innerHeight - flowerSize;

    const newFlower = {
        id,
        top: Math.random() * maxY,
        left: Math.random() * maxX,
    };

    setFlowers((prev) => [...prev, newFlower]);

    setTimeout(() => {
        setFlowers((prev) => prev.filter((flower) => flower.id !== id));
    }, 4000);
    };



  const collectFlower = (id) => {
    setFlowers((prev) => prev.filter((flower) => flower.id !== id));
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flower-page">
      <h1 className="counter">Flowers Collected: {count}</h1>

      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flower"
          onClick={() => collectFlower(flower.id)}
          style={{
            top: `${flower.top}px`,
            left: `${flower.left}px`,
            transform: `rotate(${Math.random() * 360}deg)`
            }}

        >
          🌸
        </div>
      ))}

      {count >= 10 && (
        <button className="next-btn" onClick={onNext}>
          Next 💖
        </button>
      )}
    </div>
  );
}

export default FlowerPage;
