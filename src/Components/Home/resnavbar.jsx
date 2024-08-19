import React from 'react'
import { useRef } from 'react'
import './Hero.css';
import { Link } from 'react-scroll';
import { useState } from 'react'
import Navbardropdown from './Navbardropdown'
import { FaBars, FaTimes } from 'react-icons/fa'





const ResNavbar = (props) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  const [dropdown, setDropdown] =  useState(false)
  return (
    <div>
       <div className='rescontainer'>

        <Link to='home-container'
                spy={true}
                smooth={true}
                duration={500}
                id='logo'>
            {props.logo}
        </Link>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        
        <div className='nav' ref={navRef}>
                <Link to='home-container'
                        spy={true}
                        smooth={true}
                        duration={500}
                >
                    <p>Home</p>
                </Link>
                <Link to='cont'
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                    <p>About</p>
                </Link>
                <Link to='servicescont'
                        spy={true}
                        smooth={true}
                        duration={500}
                >
                    <p>Services</p>
                </Link>
                <Link to='contacthero'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <p>Contact</p>
                </Link>

                    <div onMouseEnter = {() => setDropdown(true)}
                    onMouseLeave = {() => setDropdown(false)}>
                                <Link to=''>
                                <p>Projects</p>
                                </Link>
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

export default ResNavbar;