
import CovidLineChart from './components/CovidLineChart'
import Papa from 'papaparse';
import React, { useState, useEffect } from 'react';
import CovidBarChart from './components/CovidBarChart';
import CovidColumnChart from './components/CovidColumnChart';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Bottom from './components/BottomSection/Bottom';
import RightBar from './components/RightSideBar/RightBar';
import ImageSlider from './components/Slider/ImageSlider';
import MainDashboard from './components/MainDashboard/MainDashboard';





const App = () => {

  // const [data, setData] = useState([]);

  // // Load CSV data and parse it using PapaParse
  // useEffect( () => {
  //   fetch('/case_time_series.csv')
  //     .then((response) => response.text())
  //     .then((csvText) => {
  //       const parsedData = Papa.parse(csvText, {
  //         header: true, // Indicates that the first row is a header
  //         dynamicTyping: true,
  //       });
  //       setData(parsedData.data);
  //     });
  // }, []);

// // Slider data
//   const slides = [
//     { url: "./Symptoms.png", title: "Symptom" },
//     { url: "./Symptoms2.png", title: "Symptom" },
//     ,
//   ];
//   const containerStyles = {
//     width: "300px",
//     height: "280px",
//     margin: "0 auto",
//   };



  return <>

    
    <MainDashboard />
     {/* <MainPage /> */}
    {/* <CovidLineChart data={data} type={"Daily Confirmed"}  stroke={"blue"}/>
    <CovidLineChart data={data} type={"Daily Recovered"}  stroke={"green"}/>
    <CovidLineChart data={data} type={"Daily Deceased"}  stroke={"red"}/>
    <CovidBarChart data={data} />
    <CovidColumnChart data={data}/>
    <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
     */}
  </>
    
  
}

export default App