import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'



function Navbardropdown() {


    const [dropdown, setDropdown] =  useState(false)
  return (
    <div>
      <ul id={dropdown ? 'navsubmenu-clicked' : 'navsubmenu'}
        onClick={() => setDropdown(!dropdown)}
      >
        <li>
            <Link to='/Web Design Page' onClick={() => setDropdown(false)}>
                <p id='navsubitem'>Web Design</p>
            </Link>
        </li>

        <li>
            <Link to='/Graphics Design Page'>
                <p id='navsubitem'>Graphic Design</p>
            </Link>
        </li>
      </ul>
    </div>
  )
}



export default Navbardropdown;
