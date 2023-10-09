import { Button } from "@blueprintjs/core";
import React from "react";

export function Login() {
  const onLogin = () => {
    // TODO: Implement Login to firebase auth
    console.log("User logged in");
  };
  const onRegister = () => {
    // TODO: Implement Register to firebase auth
    console.log("User registered");
  };
  return (
    <form>
      {/* TODO: Implement auth form for username and password */}
      <Button onClick={onLogin}>Login</Button>
      <Button onClick={onRegister}>Register</Button>
    </form>
  );
}
