"use client";

import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";
import { usePathname } from "next/navigation";

const containerStyle = {
  width: "100%",
  height: "480px",
};

const center = {
  lat: 20.772205,
  lng: 105.763294,
};

interface GoogleMapComponentProps {
  apiKey: string; // truyền API Key từ props hoặc từ config
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey }) => {
  const pathname = usePathname();

  // State marker và InfoWindow như cũ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [marker, setMarker] = React.useState({
    lat: 20.772205,
    lng: 105.763294,
  });

  const [infoWindow, setInfoWindow] = React.useState({
    isOpen: false,
    position: {
      lat: 20.772205,
      lng: 105.763294,
    },
    content: "Đây là nội dung của InfoWindow",
  });

  const handleMarkerClick = () => {
    setInfoWindow((prev) => ({ ...prev, isOpen: true }));
  };

  const handleInfoWindowClose = () => {
    setInfoWindow((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        key={pathname}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {/* Marker */}
        <Marker position={marker} onClick={handleMarkerClick} />

        {/* Overlay */}
        <OverlayView
          position={marker}
          mapPaneName={OverlayView.OVERLAY_LAYER}
          getPixelPositionOffset={() => ({ x: 0, y: -30 })}
        >
          <div></div>
        </OverlayView>

        {/* InfoWindow */}
        {infoWindow.isOpen && (
          <InfoWindow
            position={infoWindow.position}
            onCloseClick={handleInfoWindowClose}
          >
            <div>{infoWindow.content}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMapComponent);
