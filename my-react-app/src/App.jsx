import { useState } from 'react'
import HappyValentines from './pages/HappyValentines'
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
      </div>
    </>
  );
}

export default App
