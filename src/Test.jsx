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
function Test() {

    const inputRef = useRef(null);
    const [address, setAddress] = useState('');
    const [results, setResults] = useState([]);
    // const [origin, setOrigin] = useState({lat : 29.951065,lng : -90.071533})
    // const [destination, setDestination] = useState({lat : 29.951439, lng: -90.081970})
  
    const [origin, setOrigin] = useState(Coordinates.initialOrigin)
    const [destination, setDestination] = useState(Coordinates.initialDestination)
  
    const updateRoute = (coordinates, callback) => {
      callback(coordinates)
    };
  
    const handleSearch = async () => {
      console.log("handle search.......................")
  
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${inputRef.current.value}&format=json`
        );
        const data = await response.json();
        if (data.length > 0) {
          setResults(data)
          alert(JSON.stringify(data))
          setOrigin({ lat: data[0].lat, lng: data[0].lon });
  
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
