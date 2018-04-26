import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { compose, withProps, withStateHandlers } from "recompose";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, padding: '30px' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap)(props => 
  <div>
    {props.markers && <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.markers[0].lat, lng: props.markers[0].lng }}
    >
      {props.markers.map((marker, index) => {
        return (
          <MarkerWithLabel key={index} position={{ lat: marker.lat, lng: marker.lng }} 
            labelAnchor={{x:0, y:0}}
            labelStyle={{backgroundColor: "#FFF", padding: "10px", width: '150px' }}>
            <div>
            <h5>{marker.name}</h5>
            <div>{marker.address}</div>
            </div>
          </MarkerWithLabel>
      )})}
    </GoogleMap>}
  </div>
)

export default Map