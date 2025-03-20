import React from 'react'
import "./DropDownContent.css"

const DropDownContent = ({
    children
}) => {
  return (
    <div id="myDropdown" className="dropdown-content">
    {children}
  </div>
  )
}

export default DropDownContent