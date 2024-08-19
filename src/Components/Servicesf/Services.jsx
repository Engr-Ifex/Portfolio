import React from 'react'
import './Services.css'
import wwbb from './wwdd.jpg'
import ggdd from './ggdd.jpg'
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt'

function Services() {
  return (
    <div id='servicescont'>
      <div id='services'>
        <p>What i offer</p>
        <h1>Services</h1>
      </div>
      <div id='glasscont'>
        <Tilt
         perspective={1000}
         glareEnable={true}
         glareMaxOpacity={0.45}
         scale={1.02}
        >
        <div className='glasscard'>
          <img src={wwbb} alt=""  id='serimg' loading='lazy' />
            <div id='glasscontent'>
                <img src="" alt="" />
                 <p id='glassheader'>Web Development</p>
                 <p>Custom and responsive website development tailored to your client's needs,
                    Integration of modern web technologies for enhanced functionality,
                    Creating intuitive and visually appealing user interfaces,
                    Focusing on user experience to enhance engagement and usability.
                </p>
                 <Link to='/Web Design Page'>
                     <button id='glassbtn'>My Projects</button>
                </Link>
            </div>
        </div>
        </Tilt>

        <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
        >
        <div className='glasscard'>
        <img src={ggdd} alt="" id='serimg'  loading='lazy' />
            <div id='glasscontent'>
                <img src="" alt="" />
                 <p id='glassheader'>Graphic Design</p>
                 <p>Developing consistent visual identities across various media, including business cards, letterheads, and social media profiles,
                    Crafting brand guidelines that ensure a cohesive and professional brand image,Creating unique and memorable logos that represent a brand's identity.
                </p> 
                 <Link to='/Graphics Design Page'>
                     <button id='glassbtn'>My Projects</button>
                </Link>
            </div>
        </div>
        </Tilt>

      </div>
      <div>

      </div>
    </div>
  )
}

export default  Services;
