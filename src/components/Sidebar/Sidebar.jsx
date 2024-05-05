import React from 'react'
import './Sidebar.css'
import { MdOutlineSick, MdOutlineWbSunny, MdWindow } from "react-icons/md";
import { LuFlaskConical } from "react-icons/lu";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";



const Sidebar = () => {
  return (
    <div className='sidebar'>

    <div className='sun_icon'>
    <MdOutlineWbSunny color='white' fontSize='30px'/>
    </div>

    <div className='mid_content'>
    <MdWindow color='white' fontSize='30px'/>
    <MdOutlineSick color='white' fontSize='30px'/>
    <LuFlaskConical color='white' fontSize='30px'/>
    <FaHandHoldingDollar color='white' fontSize='30px'/>
    </div>

    <div className='setting_icon'>
    <TiMessageTyping color='white' fontSize='30px' />
    </div>

    </div>
  )
}

export default Sidebar