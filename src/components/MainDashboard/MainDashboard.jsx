// import Navbar from './Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar';
import RightBar from '../RightSideBar/RightBar';
import CovidLineChart from '../CovidLineChart';
import CovidAreaChart from '../CovidAreaChart';
import CovidBarChart from '../CovidBarChart';
import CovidColumnChart from '../CovidColumnChart';
import CovidDonutChart from '../CovidDonutChart';
import React, { useState, useEffect } from 'react';
import './MainDashboard.css'; 
import Navbar from '../Navbar/Navbar.jsx';
import Bottom from '../BottomSection/Bottom.jsx';
import Papa from 'papaparse';


const MainDashboard = () => {

    const [data, setData] = useState([]);

    // Load CSV data and parse it using PapaParse
    useEffect( () => {
      fetch('/case_time_series.csv')
        .then((response) => response.text())
        .then((csvText) => {
          const parsedData = Papa.parse(csvText, {
            header: true, // Indicates that the first row is a header
            dynamicTyping: true,
          });
          setData(parsedData.data);
        });
    }, []);
  





    return (
        <div className="main-grid">
            {/* Navbar at the top */}
            <div className="navbar">
                <Navbar />
            </div>

            {/* Left sidebar */}
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="main-content">
                {/* Top row: three equal sections */}
                <div className="top-row">
                    {/* Section 1 */}
                    <div className="section">
                        <CovidLineChart data={data} type={"Daily Confirmed"}  stroke={"blue"}/>
                    </div>

                    {/* Section 2 */}
                    <div className="section">
                        <CovidLineChart data={data} type={"Daily Recovered"}  stroke={"green"}/>
                    </div>

                    {/* Section 3 */}
                    <div className="section">
                        <CovidLineChart data={data} type={"Daily Deceased"}  stroke={"red"}/>
                    </div>
                </div>

                {/* Bottom row: one section spanning the full width */}
                <div className="bottom-section">
                    <CovidBarChart data={data}/>
                </div>

                <div className="additional-row">
                {/* Additional Section 1 */}
                <div className="section">
                    <Bottom />
                </div>

                {/* Additional Section 2 */}
                <div className="section">
                    <CovidDonutChart />
                </div>

                {/* Additional Section 3 */}
                <div className="world_map_img">
                <div className='worldMap'>
    <img src="world_covid.png"  width="300" height="200"></img>
    </div>
                </div>
            </div>


            </div>

          



            {/* Right sidebar */}
            <div className="rightbar">
                <RightBar />
            </div>

            
            
        </div>
    );
};

export default MainDashboard;

