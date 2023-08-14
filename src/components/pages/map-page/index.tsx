import "./index.css";
import { Button, Intent } from "@blueprintjs/core";
import DG from "2gis-maps";
import React, { useEffect, useState } from "react";

const DEFAULT_COORDS = [43.238949, 76.889709]; // Almaty, Kazakhstan

export const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map />
    </div>
  );
};

export const Map = () => {
  const [userCoords, setUserCoords] = useState(DEFAULT_COORDS);
  const [map, setMap] = useState(null);
  useEffect(() => {
    const newMap = DG.map("map-container", {
      center: DEFAULT_COORDS,
      zoom: 13,
    });

    setMap(newMap);
    return () => newMap.remove();
  }, []);

  const onLocationPendingButton = () => {
    console.log("onLocationPendingButton");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserCoords([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }

    DG.marker(userCoords).addTo(map);
    map.setView(userCoords, 30);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapper />
      <Button
        onClick={onLocationPendingButton}
        className="floating-button"
        intent={Intent.SUCCESS}
      >
        I'm ready
      </Button>
    </div>
  );
};

const MapWrapper = React.memo(
  () => {
    return (
      <div id="map-container" style={{ width: "100%", height: "100%" }}></div>
    );
  },
  () => true
);

export default App;
