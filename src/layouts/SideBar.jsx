import React from 'react';
import { w3_close } from '../utils/w3_close';
import SideBarItem from '../components/SideBarItem';


const SideBar = ({
  name,

}) => {
  return (
    <nav
      className="w3-sidebar w3-collapse w3-white w3-animate-left"
      style={{ zIndex: 3, width: 300 }}
      id="mySidebar"
    >
      <br />
      <div className="w3-container w3-row">
        <div className="w3-col s4">
          <img
            src="https://w3schools.com/w3images/avatar2.png"
            className="w3-circle w3-margin-right"
            style={{ width: 46 }}
          />
        </div>

      </div>
      <hr />
      <div className="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div className="w3-bar-block">
        <a
          href="#"
          className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
          onClick={()=>{w3_close()}}
          title="close menu"
        >
          <i className="fa fa-remove fa-fw" />
          &nbsp; Close Menu
        </a>
        <SideBarItem  className="w3-bar-item w3-button w3-padding"
          icon="fa fa-history fa-fw" 
          name="Home" id="home"

        />  
        <SideBarItem  className="w3-bar-item w3-button w3-padding"
          icon="fa fa-bank fa-fw" 
          name="Contact"   id="contact"

        />   
        <SideBarItem  className="w3-bar-item w3-button w3-padding"
          icon="fa fa-history fa-fw" 
          name="About" id="about"

        />  
        <SideBarItem  className="w3-bar-item w3-button w3-padding"
          icon="fa fa-cog fa-fw" 
          name="Credits"  id="credits"

        />  
 
        <br />
        <br />
      </div>
    </nav>
  );
}

export default SideBar;


