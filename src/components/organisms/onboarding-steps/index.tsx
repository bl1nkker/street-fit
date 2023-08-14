import React, { useState } from "react";
import { OnboardingStepsProps } from "./types";
import { useNavigate } from "react-router-dom";
import { StepOne } from "./components/step-1";
import { StepTwo } from "./components/step-2";
import { StepThree } from "./components/step-3";

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

  const ONBOARDING_STEPS = [<StepOne />, <StepTwo />, <StepThree />];
  return (
    <div className="onboarding-container">
      {ONBOARDING_STEPS[currentStep - 1]}

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
