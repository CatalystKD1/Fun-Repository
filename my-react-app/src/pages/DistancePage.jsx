import { useEffect, useRef, useState } from "react";
import surpriseVideo from "../videos/travelDistance.mp4";
// import "./DistancePage.css";

function DistancePage({ onNext }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);   // user clicked surprise
  const [showVideo, setShowVideo] = useState(false); // delay finished
  const [canContinue, setCanContinue] = useState(false); // video ended

  // after click, wait a bit so they can read, then show+play video
  useEffect(() => {
    if (!started) return;

    const t = setTimeout(() => {
      setShowVideo(true);
    }, 1200); // <-- change delay (ms)

    return () => clearTimeout(t);
  }, [started]);

  // when video becomes visible, try to play it
  useEffect(() => {
    if (!showVideo) return;
    const v = videoRef.current;
    if (!v) return;

    // keep it safe for autoplay in browsers: muted + playsInline
    v.currentTime = 0;
    v.play().catch(() => {
      // If autoplay is blocked, user can press play manually 
    });
  }, [showVideo]);

  const handleSurprise = () => {
    setStarted(true);
    setCanContinue(false);
  };

  const handleEnded = () => setCanContinue(true);

  return (
    <div className="page">
      <h1>
        Being long distance is very tough. But we manage to make it work.
        <br />
        We are 465 km apart. To visit, we need to travel 4h 30min one direction.
      </h1>

      {!started && (
        <button className="continue-btn" onClick={handleSurprise}>
          Click for surprise
        </button>
      )}

      {showVideo && (
        <div style={{ marginTop: 16 }}>
          <video
            ref={videoRef}
            src={surpriseVideo}
            onEnded={handleEnded}
            controls={false}
            muted
            playsInline
            style={{ width: "100%", maxWidth: 720, borderRadius: 12 }}
          />
        </div>
      )}

      {canContinue && (
        <button className="continue-btn" onClick={onNext} style={{ marginTop: 16 }}>
          Continue
        </button>
      )}
    </div>
  );
}

export default DistancePage;
