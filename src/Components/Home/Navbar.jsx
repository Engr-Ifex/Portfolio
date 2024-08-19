import React from 'react'
import './Hero.css';
import { Link } from 'react-scroll';
import { useState } from 'react'
import Navbardropdown from './Navbardropdown'




const Navbar = (props) => {

  const [dropdown, setDropdown] =  useState(false)


const [color, setColor] = useState(false)
const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }else {
      setColor(false)
    }
}

window.addEventListener('scroll',changeColor)
  return (
    <div>
       <div className={color ? 'container nav-bg' : 'container'}>
        <Link to='home-container'
                spy={true}
                smooth={true}
                duration={500}
                id='logo'>
            {props.logo}
        </Link>
        <div id='nav'>
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
        </div>
        <div>
          <button id='btn1'><a href='./RESUME.pdf' download>Resume</a></button>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
