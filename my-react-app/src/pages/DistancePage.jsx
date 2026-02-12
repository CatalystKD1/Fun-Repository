//import "./DistancePage.css";

function DistancePage({ onNext }) {
    return (
        <div className="page">
            <p>This is how far we live from each other.</p>
            <button class="continue-btn" onClick={onNext}>Continue</button>
        </div>
    );
}

export default DistancePage;