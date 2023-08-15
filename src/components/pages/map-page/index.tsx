import "./index.css";
import React from "react";
import { MapglContextProvider } from "components/organisms/map/mapgl-context";
import Mapgl from "components/organisms/map/mapgl";

export const Map = (props: any) => {
  return (
    <MapglContextProvider>
      <div className="App-map-container">
        <Mapgl />
      </div>
    </MapglContextProvider>
  );
};
