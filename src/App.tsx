import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./components/pages/onboarding-page";
import { Map } from "./components/pages/map-page";
import Login from "./components/pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
