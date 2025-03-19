import React from 'react';


const DashBoardCard = ({
    color,
    icon,
    value,
    type,
    onClick

}) => {
  return (
    <div className="w3-quarter" >
    <div className={`w3-container ${color} w3-padding-16`} onClick={onClick} style={{cursor: "pointer"}}>
      <div className="w3-left">
        {icon}

      </div>
      <div className="w3-right">
        <h3>{value}</h3>
      </div>
      <div className="w3-clear" />
      <h4>{type}</h4>
    </div>
  </div>
  );
}

export default DashBoardCard;
