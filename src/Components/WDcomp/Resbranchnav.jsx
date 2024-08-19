import React from 'react'
import { useRef } from 'react'
import '../Home/Hero.css';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Navbardropdown from '../Home/Navbardropdown'
import { FaBars, FaTimes } from 'react-icons/fa'




const ResbranchNavbar = (props) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  const [dropdown, setDropdown] =  useState(false)
  return (
    <div>
       <div className='rescontainer'>

       <NavLink to='/' id='rslogo'>
            {props.logo}
        </NavLink>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        
        <div className='nav' ref={navRef}>
        <NavLink to='/'>
              <p>Home</p>
          </NavLink>
          <NavLink to='/'>
            <p>About</p>
          </NavLink>
          <NavLink to='/'>
            <p>Services</p>
          </NavLink>
          <NavLink to='/'>
            <p>Contact</p>
          </NavLink>

                    <div onMouseEnter = {() => setDropdown(true)}
                    onMouseLeave = {() => setDropdown(false)}>
                                <NavLink to=''>
                                <p>Projects</p>
                                </NavLink>
                                {dropdown && <Navbardropdown/>}
                    </div>
                    
                    <button id='btn1'><a href='./RESUME.pdf' download>Resume</a></button>

                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                    </button>
        </div>
        
        
        
      </div>
   
    </div>
  )
}

export default ResbranchNavbar;