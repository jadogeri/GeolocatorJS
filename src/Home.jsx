import './App.css';
import Footer from './layouts/Footer';
import Banner from './layouts/Banner';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import { w3_close } from './utils/w3_close';
import Dashboard from './layouts/sections/Dashboard';
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAfrica,
  incrementAsia,
  incrementAmericas,
  incrementEurope
}
from "./redux/feature/continents/continentsSlice"
import React, { useState, useRef }  from 'react'
import MapComponent from './components/Map/Map';
import * as Coordinates from './data/coordinates';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';
// import Map from "./components/Map/Map.jsx"
import DropDownHeader from './components/DropDownHeader';
import { dropdownToggle } from './utils/dropdownToggle';
import DropDownContent from './components/DropDownContent/DropDownContent';
import openTab from './utils/openTab';
import Logo from './components/logo';
import TabContent from './components/TabContent';
import About from './views/About';
import Contact from './views/Contact';
import Credit from './views/Credits';
function Test() {
    const dispatch = useDispatch();
    const africaCount = useSelector((state) => state.continents.africa);
    const asiaCount = useSelector((state) => state.continents.asia);
    const americasCount = useSelector((state) => state.continents.americas);
    const europeCount = useSelector((state) => state.continents.europe);

    console.log("starting values of count ==== ", africaCount,asiaCount,americasCount)

    const originInputRef = useRef(null);
    const destinationInputRef = useRef(null);
    const [originResults, setOriginResults] = useState([]);
    const [destinationResults, setDestinationResults] = useState([]);
  
    const [origin, setOrigin] = useState(Coordinates.initialOrigin)
    const [destination, setDestination] = useState(Coordinates.initialDestination)
  
    const updateCoordinates = (coordinates, callback) => {
      callback(coordinates)
    };  
    const handleSearch = async (setResults, setRoute, inputRef) => {
      console.log("handle search.......................",inputRef.current.value)
  
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${inputRef.current.value}&format=json`
        );
        const data = await response.json();
        console.log(data)
        if (data.length > 0) {
          setResults(data)
          alert(JSON.stringify(data))
          setRoute({ lat: data[0].lat, lng: data[0].lon });
  
        } else {
          alert('Address not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data');
      }
    };
        

  return (
    <>

    {/* Top container */}
    <Header logo={<Logo />}/>
    {/* Sidebar/menu */}
    <SideBar name="Mike"/>

    {/* Overlay effect when opening sidebar on small screens */}
    <div
      className="w3-overlay w3-hide-large w3-animate-opacity"
      onClick={()=>{w3_close()}}
      style={{ cursor: "pointer" }}
      title="close side menu"
      id="myOverlay"
    />
    {/* !PAGE CONTENT! */}
    <div className="w3-main" style={{ marginLeft: 300, marginTop: 43 }}>
      {/* Header */}
      <div id="home" className="view">
      <Banner heading={"My Dashboard"}/>

      <Dashboard 

        africaCount={africaCount}
        asiaCount={asiaCount}
        americasCount={americasCount}
        europeCount={europeCount}       
        africaCountHandler={()=>{dispatch(incrementAfrica());updateCoordinates(Coordinates.africaCoordinates2,setOrigin);updateCoordinates(Coordinates.africaCoordinates,setDestination);}}
        asiaCountHandler={()=>{dispatch(incrementAsia());updateCoordinates(Coordinates.asiaCoordinates,setDestination);}}
        americasCountHandler={()=>{dispatch(incrementAmericas());updateCoordinates(Coordinates.americasCoordinates2,setOrigin);;updateCoordinates(Coordinates.americasCoordinates,setDestination);}}
        europeCountHandler={()=>{dispatch(incrementEurope());updateCoordinates(Coordinates.europeCoordinates,setDestination);}}      
      
      />

      <div className="w3-panel">
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          {/* <Regions /> */}
          {/* <Map /> */}
          <MapComponent 
            destination={destination} origin={origin} name={"map"} 
            center={destination} 
          />   
          <DropDownHeader 
                className="w3-container w3-center w3-padding w3-red"
                style={{ width: "100%",cursor: "pointer" }}
                type="Bounce Rate" value="75%"
                onClick={()=>{dropdownToggle("myDropdown")}}
          />
          <DropDownContent>
          <h2 className="w3-center">Tabs</h2>
<div className="w3-border">
<div className="w3-bar w3-theme">
  <button className="w3-bar-item w3-button testbtn w3-padding-16" style={{ width: "50%",cursor: "pointer" }}
    onClick={(event)=>{openTab(event,'Origin')}}>Origin</button>
  <button className="w3-bar-item w3-button testbtn w3-padding-16" style={{ width: "50%",cursor: "pointer" }}
    onClick={(event)=>{openTab(event,'Destination')}}>Destination</button>
</div>

<TabContent 
  id="Origin" placeholder="Enter Origin" ref={originInputRef}
  handleSearch={handleSearch} setResults={setOriginResults}
  results={originResults} setRoute={setOrigin}
  updateCoordinates={updateCoordinates} display={"block"}  hidden=""
  
/>
<TabContent 
  id="Destination" placeholder="Enter Destination" ref={destinationInputRef}
  handleSearch={handleSearch} setResults={setDestinationResults}
  results={destinationResults} setRoute={setDestination}
  updateCoordinates={updateCoordinates} hidden="w3-hidden" style={{display:"none"}}
  
/>
</div>
          </DropDownContent>



        </div>
        </div>
      </div>
      <About />
      <Contact />
      <Credit />

      <hr />
      <br />

      {/* Footer */}
      <Footer />

      {/* End page content */}
    </div>
  </>
  
  );
}

export default Test;


//div id="home" style={{display :"none"}}