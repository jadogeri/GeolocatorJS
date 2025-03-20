import React from 'react'

const DropDownHeader = ({
    type,
    value,
    className,
    style,
    onClick
}) => {
  return (
    <>
        <p>{type}</p>
        <div className="w3-grey">
            <div
                className={className}
                style={style}
                onClick={onClick}
            >
               {value}
            </div>
        </div>      
    </>
  );
}

export default DropDownHeader


