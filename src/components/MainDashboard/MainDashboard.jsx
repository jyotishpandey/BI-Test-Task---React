
import Sidebar from '../Sidebar/Sidebar';
import RightBar from '../RightSideBar/RightBar';
import CovidLineChart from '../CovidLineChart';
import CovidBarChart from '../CovidBarChart';
import CovidDonutChart from '../CovidDonutChart';
import React, { useState, useEffect } from 'react';
import './MainDashboard.css'; 
import Navbar from '../Navbar/Navbar.jsx';
import Bottom from '../BottomSection/Bottom.jsx';
import Papa from 'papaparse';


const MainDashboard = () => {

    const [data, setData] = useState([]);

    
    useEffect( () => {
      fetch('/case_time_series.csv')
        .then((response) => response.text())
        .then((csvText) => {
          const parsedData = Papa.parse(csvText, {
            header: true, 
            dynamicTyping: true,
          });
          setData(parsedData.data);
        });
    }, []);
  





    return (
        <div className="main-grid">
           
            <div className="navbar">
                <Navbar />
            </div>

            
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="main-content">
          
                <div className="top-row">
                
                    <div className="section">
                        <CovidLineChart data={data} type={"Daily Confirmed"}  stroke={"blue"}/>
                    </div>

                 
                    <div className="section">
                        <CovidLineChart data={data} type={"Daily Recovered"}  stroke={"green"}/>
                    </div>

                  
                    <div className="section">
                        <CovidLineChart data={data} type={"Daily Deceased"}  stroke={"red"}/>
                    </div>
                </div>

               
                <div className="bottom-section">
                    <CovidBarChart data={data}/>
                </div>

                <div className="additional-row">
               
                <div className="section">
                    <Bottom />
                </div>

                
                <div className="section">
                    <CovidDonutChart />
                </div>

            
                <div className="world_map_img">
                <div className='worldMap'>
    <img src="world_covid.png"  width="300" height="200"></img>
    </div>
                </div>
            </div>


            </div>

          

            <div className="rightbar">
                <RightBar />
            </div>

            
            
        </div>
    );
};

export default MainDashboard;

