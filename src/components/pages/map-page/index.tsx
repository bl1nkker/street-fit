import "./index.css";
import { Button, Intent } from "@blueprintjs/core";
import { load } from "@2gis/mapgl";
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
  const [map, setMap] = useState<any>(null);
  const [mapglAPI, setMapglAPI] = useState<any>(null);
  const initializeMap = async () => {
    const loadedMapglAPI = await load();
    setMapglAPI(loadedMapglAPI);
    const newMap = new loadedMapglAPI.Map("map-container", {
      center: DEFAULT_COORDS,
      zoom: 13,
    });

    setMap(newMap);
  };
  useEffect(() => {
    initializeMap();
    return () => map && map.remove();
  }, [map]);

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

    new mapglAPI.Marker(map, {
      coordinates: [55.31878, 25.23584],
    });
    new ma();

    // DG.marker(userCoords).addTo(map);
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
