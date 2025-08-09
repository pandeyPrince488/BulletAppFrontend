import React, { useState } from "react";
import './Head.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaCar,FaBiking } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Head() {
    const [showMediaIcons,setShowMediaIcons] = useState(false);

    return (
      <header className='header  border-danger border-bottom'>
        
        <div className='web-name'>
          {/* <div className='logo-div text-danger'>
        <FaBiking className='logo'/>
        </div>
        <Link to="/Alogin"  className='text-decoration-none'><h2 className="text-light">BikeServ</h2></Link> */}
        <div className='logo-div text-danger'>
        <Link to="/Alogin"  className='text-decoration-none'><img className="logo" src="images/Royal_Service_Logo.jpg" /></Link> 
        </div>
        </div>
  
        <nav className= {showMediaIcons ? "mobile-navbar" : 'navbar'} >
          <ul className= {showMediaIcons ? "mobile-navbar-list" : 'navbar-list '}>
            <li><Link to='/' className='navbar-link text-light'>Home</Link></li>
            <li><Link to='/about' className='navbar-link text-light'>About</Link></li>
            <li><Link to='/services' className='navbar-link text-light'>Services</Link></li>
            {/* <li><Link to='/booking' className='navbar-link text-light'>Contact</Link></li> */}
            <li><Link to="/contact" className='navbar-link text-light'>Contact</Link></li>
            <li><a href="/sale" className='navbar-link text-light'>Sale</a></li>
          </ul>
        </nav>
  
        <div className='mobile-navbar-btn'>
          <a href='#' name='ham' className='mobile-nav-icon' onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu/>
          </a>
          {/* <a href='#' name='close' className='mobile-nav-icon'>
            <AiOutlineClose/>
          </a> */}
        </div>
      </header>
    );
  }