import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import googleMapReact from "google-map-react";
const GoogleMap = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div style={mapStyles}>
      <googleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAHSip_CeTmdzrDP149F1UJvTyJjSIB6qM" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </googleMapReact>
    </div>
  );
};

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAHSip_CeTmdzrDP149F1UJvTyJjSIB6qM",
// })(GoogleMap);
export default GoogleMap;
