import './App.css';
import Footer from './layouts/Footer';
import Banner from './layouts/Banner';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import { w3_close } from './utils/w3_close';
import GeneralStats from './layouts/sections/GeneralStats';
import Countries from './layouts/sections/Countries';
import RecentUsers from './layouts/sections/RecentUsers';
import RecentComments from './layouts/sections/RecentComments';
import Regions from './layouts/sections/Regions';
import Feeds from './layouts/sections/Feeds';
import InfoBoard from './layouts/sections/InfoBoard';
import Dashboard from './layouts/sections/Dashboard';
import logo from "../src/assets/logo.jpg"


import React, { useEffect, useState, useRef }  from 'react'
import MapComponent from './components/Map/Map';
import Address from "./components/Address/Address"
import * as Coordinates from './data/coordinates';
import {  useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';
import Loader from './components/Spinner';
// import Map from "./components/Map/Map.jsx"
import Stat from './components/Stat';
import DropDownHeader from './components/DropDownHeader';
import { dropdownToggle } from './utils/dropdownToggle';
import DropDownContent from './components/DropDownContent/DropDownContent';
import openTab from './utils/openTab';
function Test() {

    const inputRef = useRef(null);
    const originInputRef = useRef(null);
    const destinationInputRef = useRef(null);

    const [address, setAddress] = useState('');
    const [results, setResults] = useState([]);
    const [originResults, setOriginResults] = useState([]);
    const [destinationResults, setDestinationResults] = useState([]);

    // const [origin, setOrigin] = useState({lat : 29.951065,lng : -90.071533})
    // const [destination, setDestination] = useState({lat : 29.951439, lng: -90.081970})
  
    const [origin, setOrigin] = useState(Coordinates.initialOrigin)
    const [destination, setDestination] = useState(Coordinates.initialDestination)
  
    const updateRoute = (coordinates, callback) => {
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
        
    const Logo = () => {
        return (
            <img 
                src={logo}
                alt='logo'
                style={{height : 30,width : 30, borderRadius : 15}}
            
            />
        )
    }
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
      <Banner heading={"My Dashboard"}/>

      <Dashboard />
     

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
    onClick={(event)=>{openTab(event,'London')}}>Origin</button>
  <button className="w3-bar-item w3-button testbtn w3-padding-16" style={{ width: "50%",cursor: "pointer" }}
    onClick={(event)=>{openTab(event,'Paris')}}>Destination</button>
</div>

<div id="London" className="w3-container city w3-animate-opacity">
<div className="mx-auto px-5 lg:px-5" >
        <div>
          <input
            type="text" placeholder="Enter Origin" ref={originInputRef}
          />
          <button onClick={()=>{handleSearch(setOriginResults,setOrigin,originInputRef)}}>Search</button>     
          <div>
            <p>Found : {originResults.length} results</p> 
          </div>
          { originResults.length===0?
              null:
              originResults.map((item)=>{
                return (
                  <Address  
                    key={item.place_id}  location={item.display_name} name={item.name}
                    onClick={()=>{ updateRoute({lat :item.lat,lng : item.lon},setOrigin); }}                  
                  />
                )
            })
          }   
        </div>
      </div>
</div>

<div id="Paris" className="w3-container city w3-animate-opacity w3-hidden" style={{display:"none"}}>
<div className="mx-auto px-5 lg:px-5" >
        <div>
          <input
            type="text" placeholder="Enter destination" ref={destinationInputRef}
          />
          <button onClick={()=>{handleSearch(setDestinationResults,setDestination,destinationInputRef)}}>Search</button>     
          <div>
            <p>Found : {destinationResults.length} results</p> 
          </div>
          { destinationResults.length===0?
              null:
              destinationResults.map((item)=>{
                return (
                  <Address  
                    key={item.place_id}  location={item.display_name} name={item.name}
                    onClick={()=>{ updateRoute({lat :item.lat,lng : item.lon},setDestination); }}                  
                  />
                )
            })
          }   
        </div>
      </div>
</div>

</div>
          </DropDownContent>


          <Feeds />


        </div>
      </div>
      <hr />
      <GeneralStats />

      <hr />
      <Countries />

      <hr />

      <RecentUsers />

      <hr />
      <RecentComments />

      <br />

      {/* Footer */}
      <Footer />

      {/* End page content */}
    </div>
  </>
  
  );
}

export default Test;
