import React, { useState } from 'react';
import { MapContainer, TileLayer,  LayersControl } from 'react-leaflet';
import Routing from "../../RoutingControl"
import "./Map.css"
import { maps } from '../../data/maps';
import {  useMap } from 'react-leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';


function MapComponent({
  //coordinates,
  destination,
  origin,
  center
}) {
  console.log("coordinates origin ============== ", origin)
  console.log("coordinates destination ============== ", destination)
  console.log("coordinates center ============== ", center)


  return (
    <MapContainer 
      center={[center.lat,center.lng]} className="map-container"
      keyboard={true} zoom={10} style={{ height: "400px" }}
    >
      <LayersControl position="topleft">
        <LayersControl.BaseLayer checked name="Map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={maps.base}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer  name="Satelite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.satelite}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer  name="Hot">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={maps.hot}
          />
        </LayersControl.BaseLayer>
          <LayersControl.BaseLayer  name="Topography">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={maps.topography}
          />
        </LayersControl.BaseLayer>
      </LayersControl>        
      <Routing from={[origin.lat,origin.lng]} to={[destination.lat, destination.lng]} />
    </MapContainer>
  );
}

export default MapComponent