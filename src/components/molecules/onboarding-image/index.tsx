import React from "react";
import { OnboardingImageProps } from "./types";
import "./index.css";

export function OnboardingImage(props: OnboardingImageProps) {
  const { image } = props;
  return <img className="step-image" src={image} alt="os" />;
}
