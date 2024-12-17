import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import iconData from "./icons.json";
import CreateIcon from "./markers";

import L from "leaflet";

const parkBounds = [
  [43.62, -79.49], // Southwest corner (approximate)
  [43.675, -79.43], // Northeast corner (approximate)
];

const parkStyle = {
  stroke: "true",
  fillOpacity: 0.0,
  weight: 3,
  color: "#ed79eb",
};

function Map() {
  const [boundaryData, setBoundaryData] = useState(null);
  const [parkOutline, setParkOutline] = useState(null);

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch("./Green Spaces - 4326.geojson");
        if (!response.ok) {
          throw new Error("Failed to load GeoJSON data");
        }
        const data = await response.json();
        setBoundaryData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON", error);
      }
    };
    fetchGeoJson();
  }, []);

  useEffect(() => {
    if (boundaryData) {
      const specificFeature = boundaryData.features.find(
        (feature) => feature.properties.AREA_NAME === "HIGH PARK"
      );
      console.log("Features:", specificFeature);
      setParkOutline(specificFeature);
    }
  }, [boundaryData]);

  return (
    <div className="map-section">
      <MapContainer
        center={[43.6464, -79.4625]} // Latitude and Longitude
        zoom={14} // Zoom level
        minZoom={14}
        maxBounds={parkBounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%" }} // Map size
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=dAT965kl7XVHyPe36pUr" // Tile source
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> Contributors'
        />
        {parkOutline && (
          <GeoJSON data={parkOutline} style={parkStyle}></GeoJSON>
        )}
        {iconData.map((icon) => (
          <Marker
            key={icon.id}
            position={icon.position}
            icon={CreateIcon(icon.iconURL)}
          />
        ))}
      </MapContainer>
    </div>
  );
}
export default Map;
