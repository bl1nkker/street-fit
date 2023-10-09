import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import { OnboardingStepButton } from "components/molecules/onboarding-step-button";
import { OnboardingImage } from "components/molecules/onboarding-image";
import { StepTitle } from "./components/step";
import "./index.css";

export function OnboardingSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  const handleClickStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleFinish = () => {
    navigate("/login");
  };

  const ONBOARDING_TITLES = [
    "Welcome to the Outdoor Fitness App! Get ready to explore outdoor workout locations and connect with fellow fitness enthusiasts. Let's start your journey to a healthier lifestyle.",
    "Discover outdoor fitness spots near you! Our app will show you the nearest parks, playgrounds, and open spaces equipped with fitness equipment. Stay active while enjoying the outdoors.",
    "Join a community of like-minded individuals passionate about outdoor fitness. See where other users are working out and find popular spots. Get inspired and share your fitness journey with others.",
    "Track your fitness progress with the app! Log your workouts, set goals, and see your achievements over time. Whether you're a beginner or a fitness enthusiast, our app is here to support your journey.",
  ];
  const ONBOARDING_IMAGES = [
    "https://img.freepik.com/free-vector/hand-painted-watercolor-national-sports-day-illustration_52683-65620.jpg?w=1480&t=st=1692109004~exp=1692109604~hmac=1562a991c62c4e3d25c57561e91a082f9708e975bbe2336c796f3fbbaccd6ab5",
    "https://img.freepik.com/free-vector/hand-painted-watercolor-national-sports-day-illustration_52683-65620.jpg?w=1480&t=st=1692109004~exp=1692109604~hmac=1562a991c62c4e3d25c57561e91a082f9708e975bbe2336c796f3fbbaccd6ab5",
    "https://img.freepik.com/free-vector/hand-painted-watercolor-national-sports-day-illustration_52683-65620.jpg?w=1480&t=st=1692109004~exp=1692109604~hmac=1562a991c62c4e3d25c57561e91a082f9708e975bbe2336c796f3fbbaccd6ab5",
    "https://img.freepik.com/free-vector/hand-painted-watercolor-national-sports-day-illustration_52683-65620.jpg?w=1480&t=st=1692109004~exp=1692109604~hmac=1562a991c62c4e3d25c57561e91a082f9708e975bbe2336c796f3fbbaccd6ab5",
  ];
  return (
    <div className="onboarding-container">
      <div className="onboarding-buttons">
        {ONBOARDING_TITLES.map((step, index) => (
          <OnboardingStepButton
            active={index === currentStep}
            onClick={() => handleClickStep(index)}
          />
        ))}
      </div>
      <div className="onboarding-content">
        <OnboardingImage image={ONBOARDING_IMAGES[currentStep]} />
        <StepTitle title={ONBOARDING_TITLES[currentStep]} />
      </div>
      <Button className="onboarding-finish-button" onClick={handleFinish}>
        Get started!
      </Button>
    </div>
  );
}
