import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./components/pages/onboarding-page";
import MapComponent from "./components/pages/map-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;