import React from "react";
import { Map,  Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMaps = (props) => {
  const mapStyles = {
    height: "80%",
    width: "500px",
  };
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 23.685, lng: 90.3563, }}
      >
        <Marker
          position={{ lat: 23.3813964, lng: 92.2861862,}}
        />
        <Marker
          position={{ lat: 24.3135237,  lng: 91.7075346,}}
        />
        <Marker
          position={{  lat: 21.8161455,lng: 89.3926256, }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAHSip_CeTmdzrDP149F1UJvTyJjSIB6qM",
})(GoogleMaps);
