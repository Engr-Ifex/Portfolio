import React from 'react'
import './Wdhome.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Navbardropdown from '../Home/Navbardropdown'


function Branchnav(props) { 
    
    const [dropdown, setDropdown] =  useState(false)



  return (
    <div>
       <div id='branchnavcont'>
        <NavLink to='/' id='logo'>
            {props.logo}
        </NavLink>
        <div id='nav'>
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
        </div>
        <div>
        <button id='btn1'><a href='./RESUME.pdf' download>Resume</a></button>
        </div>
      </div>

    </div>
  )
}

export default Branchnav
