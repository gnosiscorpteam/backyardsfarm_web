import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import {MarkerF} from '@react-google-maps/api'

const markers = [
  {
    id: 1,
    name: "1452 Hughes Rd Grapevine TX 76051",
    position: { lat: 32.890213, lng: -97.094444 }
  }
];

const location = { lat: 32.890213, lng: -97.094444 };

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    map.setZoom(13)
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={location}
    >
      {markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default Map;