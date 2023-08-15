import React, { useCallback, useEffect, useState } from "react";
import { load } from "@2gis/mapgl";
import { Clusterer } from "@2gis/mapgl-clusterer";
import { RulerControl } from "@2gis/mapgl-ruler";
import { Directions } from "@2gis/mapgl-directions";
import { useMapglContext } from "../mapgl-context";
import { MapWrapper } from "./mapWrapper";
import { FloatingActionButton } from "components/molecules/floating-action-button";

export const MAP_CENTER = [55.31878, 25.23584];
export const DEFAULT_COORDS = [76.889709, 43.238949]; // Almaty, Kazakhstan

export default function Mapgl() {
  const { mapglInstance, setMapglContext } = useMapglContext();
  const [coords, setCoords] = useState(DEFAULT_COORDS);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let map: mapgl.Map | undefined = undefined;
    let directions: Directions | undefined = undefined;
    let clusterer: Clusterer | undefined = undefined;

    load().then((mapgl) => {
      map = new mapgl.Map("map-container", {
        center: DEFAULT_COORDS,
        zoom: 13,
        // key: "0121cac9-5c1f-4286-ab39-491f3bd40b6c",
        key: "a1893935-6834-4445-b97a-3405fb426c5b",
      });

      map.on("click", (e) => console.log(e));

      /**
       * Ruler  plugin
       */

      const rulerControl = new RulerControl(map, { position: "centerRight" });

      /**
       * Clusterer plugin
       */

      clusterer = new Clusterer(map, {
        radius: 60,
      });

      const markers = [
        { coordinates: [55.27887, 25.21001] },
        { coordinates: [55.30771, 25.20314] },
        { coordinates: [55.35266, 25.24382] },
      ];
      clusterer.load(markers);

      /**
       * Directions plugin
       */

      directions = new Directions(map, {
        directionsApiKey: "rujany4131", // It's just demo key
      });

      directions.carRoute({
        points: [
          [55.28273111108218, 25.234131928828333],
          [55.35242563034581, 25.23925607042088],
        ],
      });

      setMapglContext({
        mapglInstance: map,
        rulerControl,
        mapgl,
      });
    });

    // Destroy the map, if Map component is going to be unmounted
    return () => {
      directions && directions.clear();
      clusterer && clusterer.destroy();
      map && map.destroy();
      setMapglContext({ mapglInstance: undefined, mapgl: undefined });
    };
  }, [setMapglContext]);

  const onLocationPendingButton = () => {
    if (mapglInstance) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lt = position.coords.latitude;
            const lg = position.coords.longitude;
            let userCoords: Array<number>;
            userCoords = [lg, lt];

            let clusterer: Clusterer | undefined = undefined;
            clusterer = new Clusterer(mapglInstance, {
              radius: 60,
            });
            clusterer.load([{ coordinates: userCoords }]);
            mapglInstance.setCenter(userCoords);
            mapglInstance.setZoom(30);
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      }
      // DG.marker(userCoords).addTo(map);
      // mapInstance.setCenter([55.31878, 25.23584]);
    } else {
      console.log("No map instance");
    }
  };

  return (
    <>
      <MapWrapper />
      <FloatingActionButton onClick={onLocationPendingButton} />
    </>
  );
}
