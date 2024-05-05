import './RightBar.css'
import Slider from '../Slider/ImageSlider'
import React from 'react'
import ImageSlider from '../Slider/ImageSlider';

const RightBar = () => {


// Slider data
const slides = [
  { url: "./Symptoms.png", title: "Symptom" },
  { url: "./Symptoms2.png", title: "Symptom" },
  ,
];
const containerStyles = {
  width: "300px",
  height: "280px",
  margin: "0 auto",
};




  return (
    <div className='right_bar'>

    <div className='upper_section'>
        <h3>LIVE UPDATE</h3>
        <p>2 new cases in Pakistan</p>
        <p>4 new cases in Singapore</p>
        <p>1 new case in Thailand</p>
        <p>5 new cases in Taiwan</p>
        <p>8 new cases in Japan</p>
        <p>1 new case in Brazil</p>
        <p>1st case in Ecuador</p>
        <p>1st case in Mexico</p>
    </div>

    <div className='symptom_sec'>
    <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>

    </div>
  )
}

export default RightBar