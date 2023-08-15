import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { FloatingActionButtonProps } from "./types";
import "./index.css";
export function FloatingActionButton(props: FloatingActionButtonProps) {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="floating-button"
      intent={Intent.SUCCESS}
    >
      I'm ready
    </Button>
  );
}
