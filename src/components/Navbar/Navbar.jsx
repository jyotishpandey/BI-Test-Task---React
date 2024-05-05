import './Navbar.css'
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSquareChevDown } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        
        <h1>COVID-19</h1>
        <p>LIVE TRACKER DASHBOARD</p>

      </div>
      <div className='sideOptions'>
        
        <div className='search_btn'>
        <input type="text" placeholder="Search..."  />
        <button type="submit">{<IoIosSearch />}</button>
        </div>

        <div className='side_icons'>
        <CgProfile />
        <CiSquareChevDown />
        <IoMdNotifications />
        <FaArrowRightFromBracket />

        </div>

      </div>
    
    </nav>
  )
}

export default Navbar