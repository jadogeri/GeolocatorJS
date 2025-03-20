
import { MdLocationOn } from "react-icons/md";
import React from 'react';
import "./Address.css"

const Address = ({
    location,
    name,
    key_prop,
    onClick

}) => {
  return (
    <div className="location-result" key={key_prop} onClick={onClick} >
      <div className="location-name">{name}</div>
      <div className="location-address row"><MdLocationOn style={{fontSize:20}}/>  { location}</div>
  </div>
  );
}

export default Address;


