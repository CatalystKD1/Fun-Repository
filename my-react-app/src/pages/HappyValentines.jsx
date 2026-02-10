import ValentineCard from "../components/ValentineCard"
import "./HappyValentines.css";

function HappyValentines({ onNext }) {
    return (
        <div className="page">
        <ValentineCard />

            <button class="continue-btn"onClick={onNext}>Continue</button>
        </div>
    );
}

export default HappyValentines;