import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map(props) {
  return (
    <>
      <div className="">
        <MapContainer
          style={{
            width: "100%",
            height: "650px",
            zIndex: "1",
          }}
          center={props.position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={props.position}>
            <Popup>Pet is here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
