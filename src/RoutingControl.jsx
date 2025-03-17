import {  useEffect } from 'react';
import {  useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';
import { redIcon, greenIcon } from './data/icons';




function Routing({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      routeWhileDragging: true,
      draggableWaypoints: true,
      collapsible:true,
      autoRoute:true,  
      
      show:true,
      units:"imperial",
      createMarker: function(i, wp, n) {
        if (i === 0 ) {
          return L.marker(wp.latLng, {
            icon: greenIcon,
            draggable : true
          }).bindPopup("origin");
        } else if(i == n-1) {
          return L.marker(wp.latLng, {
            icon: redIcon,
            draggable :true
          }).bindPopup("destination");
        }else{
            return L.marker(wp.latLng, {
              draggable :true
            }).bindPopup("sub route");
    
        }
      },
    }).addTo(map);

    if(map) return () => map?.removeControl(routingControl);
  }, [from, to, map]);

  return null;
}


export default Routing