import { Marker, Popup } from "react-leaflet";

import L from "leaflet";

function CreateIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: [66, 80], // Customize the size
    iconAnchor: [33, 40], // Align to marker position
    popupAnchor: [0, -20], // Adjust popup position if needed
  });
}

export default CreateIcon;
