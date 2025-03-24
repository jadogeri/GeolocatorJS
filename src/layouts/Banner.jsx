import React from 'react';

const Banner = ({
    heading
}) => {
  return (
    <header className="w3-container" style={{ paddingTop: 15 }}>
        <h5>
            <b>
                <i className="fa fa-dashboard" /> {heading}
            </b>
        </h5>
    </header>
  );
}

export default Banner;
