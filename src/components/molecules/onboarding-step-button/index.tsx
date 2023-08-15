import React from "react";
import { OnboardingStepButtonProps } from "./types";
import "./index.css";

export function OnboardingStepButton(props: OnboardingStepButtonProps) {
  const { onClick, active } = props;
  return (
    <button
      className={`step-button ${active && "active"}`}
      onClick={onClick}
    ></button>
  );
}
