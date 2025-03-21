import React from 'react';
import DashBoardCard from '../../components/DashBoardCard';
import { FaEarthAmericas } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";


const Dashboard = ({
  africaCount,
  asiaCount,
  americasCount,
  europeCount,
  africaCountHandler,
  asiaCountHandler,
  americasCountHandler,
  europeCountHandler
}) => {
  return (
    <section>
        <div className="w3-row-padding w3-margin-bottom">
            <DashBoardCard 
                color={"w3-red"} icon={ <FaEarthAmericas  className={`fa w3-xxxlarge`}/>}
                value={americasCount} type={"Americas"}  onClick={americasCountHandler}              
            />
            <DashBoardCard 
                color={"w3-blue"} icon={ <FaEarthEurope  className={`fa w3-xxxlarge`}/>}
                value={europeCount} type={"Europe"} onClick={europeCountHandler}
            />
            <DashBoardCard 
                color={"w3-teal"} icon={ <FaEarthAfrica  className={`fa w3-xxxlarge`}/>}
                value={africaCount} type={"Africa"} onClick={africaCountHandler}
            />
            <DashBoardCard 
                color={"w3-orange w3-text-white"} icon={ <FaEarthAsia  className={`fa w3-xxxlarge`}/>}
                value={asiaCount} type={"Asia"} onClick={asiaCountHandler}
            />  

      </div>
      
    </section>
  );
}

export default Dashboard;
