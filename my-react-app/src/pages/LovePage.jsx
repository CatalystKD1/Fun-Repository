import { useMemo } from "react";
import "./LovePage.css";

export default function LovePage({ onNext }) {
  // Hard-code filenames here
  const photoNames = [
    "blurry.jpg",
    "elfTess.jpg",
    "jacket.jpg",
    "mogTess.jpg",
    "photoBooth.jpg",
    "playingGames.jpg",
    "TajDate.jpg",
    "weirdBaby.jpg"
  ];

  // Convert to usable URLs
  const images = useMemo(
    () => photoNames.map((name) => `${import.meta.env.BASE_URL}love/${name}`),
    []
  );

  // Duplicate for seamless infinite loop
  const loopImages = [...images, ...images];

  return (
    <div className="love-page">
      <h1 className="love-title">Us 💞</h1>

      <div className="carousel">
        <div
          className="track"
          style={{
            animationDuration: `${Math.max(12, images.length * 2)}s`,
          }}
        >
          {loopImages.map((src, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={`memory-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <h2>
        Thank you so much for a wonderful valentines day. I love you <br/>
        Being long distance is hard, but I am so happy to do it with you. <br/>
        You are becoming an amazing women and I hope you are proud of yourself, because I am proud of you.
      </h2>
    </div>
  );
}
