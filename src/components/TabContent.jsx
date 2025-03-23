import React from 'react';
import Address from './Address/Address';

const TabContent = ({
    id,
    placeholder,
    ref,
    results,
    handleSearch,
    setResults,
    setRoute,
    updateCoordinates,
    display,
    hidden,
    style
    
}) => {
  return (
<div id={id} className={`w3-container city w3-animate-opacity ${hidden}`} style={style} >
<div className="mx-auto px-5 lg:px-5" >
        <div>
          <input
            type="text" placeholder={placeholder} ref={ref}
          />
          <button onClick={()=>{handleSearch(setResults,setRoute,ref)}}>Search</button>     
          <div>
            <p>Found : {results.length} results</p> 
          </div>
          { results.length===0?
              null:
              results.map((item)=>{
                return (
                  <Address  
                    key={item.place_id}  location={item.display_name} name={item.name}
                    onClick={()=>{ updateCoordinates({lat :item.lat,lng : item.lon},setRoute); }}                  
                  />
                )
            })
          }   
        </div>
      </div>
</div>
  );
}

export default TabContent;
