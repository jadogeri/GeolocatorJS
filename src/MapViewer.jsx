import React, { useEffect, useState, useRef }  from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import Map from './components/Map/Map';
import Address from "./components/Address/Address"

const MapViewer = () => {
  const inputRef = useRef(null);
  const location = useLocation();  
  const navigate = useNavigate();  
  const [address, setAddress] = useState('');
  const [results, setResults] = useState([]);
  const [origin, setOrigin] = useState({lat : 29.951065,lng : -90.071533})
  const [destination, setDestination] = useState({lat : 29.951439, lng: -90.081970})
  const [coordinates, setCoordinates] = useState({lat : 29.951065,lon : -90.071533});    
  useEffect(() => {
    // Accessing the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field on initial render
    }
    updateRoute({lat :location.state.lat, lng :location.state.lng },setDestination)
  }, []);

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
      
  return (
    <section className="flex-grow border-b py-5 pw-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto " style={{width:"300%", zIndex:"auto"}} >
        {
          <Map 
            destination={destination} origin={origin} name={"map"} 
            center={destination} coordinates={coordinates}
          />
        }
      </div>
      <div className="mx-auto px-5 lg:px-5" style={{zIndex:400}}>
        <div>
          <input
            type="text" placeholder="Enter address" ref={inputRef}
          />
          <button onClick={handleSearch}>Search</button>     
          <div>
            <p>Found : {results.length} results</p> 
          </div>
          { results.length===0?
              null:
              results.map((item)=>{
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
    </section>
  )
}

export default MapViewer



