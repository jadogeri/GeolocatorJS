import React from 'react';
import DashBoardCard from '../../components/DashBoardCard';
import { FaEarthAmericas } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";


const Dashboard = () => {
  return (
    <section>
        <div className="w3-row-padding w3-margin-bottom">
            <DashBoardCard 
                color={"w3-red"} icon={ <FaEarthAmericas  className={`fa w3-xxxlarge`}/>}
                value={52} type={"Americas"}                
            />
            <DashBoardCard 
                color={"w3-blue"} icon={ <FaEarthEurope  className={`fa w3-xxxlarge`}/>}
                value={59} type={"Europe"}
            />
            <DashBoardCard 
                color={"w3-teal"} icon={ <FaEarthAfrica  className={`fa w3-xxxlarge`}/>}
                value={23} type={"Africa"}
            />
            <DashBoardCard 
                color={"w3-orange w3-text-white"} icon={ <FaEarthAsia  className={`fa w3-xxxlarge`}/>}
                value={50} type={"Asia"}
            />  

      </div>
      
    </section>
  );
}

export default Dashboard;
