import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const MapExample: React.FC = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -1.2921, // Nairobi, Kenya (default location)
    lng: 36.8219,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        options={{
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          ],
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapExample;