import "./ValentineCard.css";

export default function ValentineCard() {
  return (
    <div className="val-card">
      <div className="val-hearts" aria-hidden="true">
        <span>💗</span>
        <span>💖</span>
        <span>💞</span>
      </div>

      <h1 className="val-title">Happy Valentine&apos;s Day ❤️ 🌹</h1>
      <p className="val-text">
        Because I could not be with you in person. I made this for you!
      </p>

      <div className="val-footer">
        <span className="val-mini">💌</span>
      </div>
    </div>
  );
}