import {  useEffect } from 'react';
import {  useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';
import { redIcon, greenIcon } from './data/icons';
import "./routing.css"




const Routing =({ from, to }) =>{
  const map = useMap();
  var group = new L.featureGroup();

  useEffect(() => {
    if (!map) return
    const routingControl = L.Routing.control({
      
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      routeWhileDragging: true,
      draggableWaypoints: true,
      collapsible:true,
      autoRoute:true,  
      show:true,
      useZoomParameter:true,
      lineOptions: {
        styles: [{className: 'animate'}] // Adding animate class
    },
    addWaypoints:true,
    
      
      units:"imperial",
      createMarker: function(i, wp, n) {
        if (i === 0 ) {
          return L.marker(wp.latLng, {
            icon: greenIcon,
            draggable : true
          }).bindPopup("origin").addTo(group);
        } else if(i == n-1) {
          return L.marker(wp.latLng, {
            icon: redIcon,
            draggable :true
          }).bindPopup("destination").addTo(group);
        }else{
            return L.marker(wp.latLng, {
              draggable :true
            }).bindPopup("sub route").addTo(group);
    
        }
      },
    }).addTo(map);
    if(map){
      
      map.fitBounds(group.getBounds());

    }

    if(map) return () => map?.removeControl(routingControl);
  }, [from, to, map]);

  return null;
}


export default Routing