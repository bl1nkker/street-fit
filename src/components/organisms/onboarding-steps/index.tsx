import React, { useState } from "react";
import { OnboardingStepsProps } from "./types";
import { useNavigate } from "react-router-dom";

export function OnboardingSteps(props: OnboardingStepsProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    navigate("/map");
  };
  return (
    <div className="onboarding-container">
      <div className="onboarding-step">
        {currentStep === 1 && <h2>Welcome to Step 1</h2>}
        {currentStep === 2 && <h2>Welcome to Step 2</h2>}
        {currentStep === 3 && <h2>Welcome to Step 3</h2>}
      </div>

      <div className="onboarding-buttons">
        <button onClick={handlePrev} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep === 3 ? (
          <button onClick={handleFinish}>Finish</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
}
