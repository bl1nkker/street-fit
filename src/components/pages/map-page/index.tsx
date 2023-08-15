import "./index.css";
import { Button, Intent } from "@blueprintjs/core";
import { load } from "@2gis/mapgl";
import React, { useCallback, useEffect, useState } from "react";
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
