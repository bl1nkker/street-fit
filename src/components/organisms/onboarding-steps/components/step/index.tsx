import React from "react";
import { OnboardingStepProps } from "../../types";
import "./index.css";

export function StepTitle(props: OnboardingStepProps) {
  const { title } = props;
  return <h2 className="step-title">{title}</h2>;
}
