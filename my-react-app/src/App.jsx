import { useState } from 'react'
import HappyValentines from './pages/HappyValentines'
import DistancePage from './pages/DistancePage'
import FlowerPage from './pages/FlowerPage'
import LovePage from './pages/LovePage'
import './App.css'

function App() {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <div className="container">
        {step === 0 && <HappyValentines onNext={nextStep} />}
        {step === 1 && <DistancePage onNext={nextStep} />}
        {step === 2 && <FlowerPage onNext={nextStep} />}
        {step === 3 && <LovePage onNext={nextStep} />}
      </div>
    </>
  );
}

export default App
