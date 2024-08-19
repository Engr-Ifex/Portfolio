import React from 'react'
import './Gdhome.css'
import Contact from '../Contact/Contact';
import Branchnav from '../WDcomp/Branchnav';
import { GDdata1, Skills } from './GDdata'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ResbranchNavbar from '../WDcomp/Resbranchnav'


function GdHome() {
  return (
    <div id='gdher'>
        <div id="gdhero">
          <Branchnav logo='IFEX GRAPHICS.'/>
          <ResbranchNavbar logo='IFEX GRAPHICS.'/>
          <div id='gdcont'>
              <div id='gdconttext'>
                  <h1>Graphic Designer</h1>
              </div>
          </div>
        </div>



        <div id='gdsecond'>
        <p>My Works</p>
          <h1>Projects</h1>

            <div id='row'>
              {GDdata1.map((GDdata, index) => (

                <LazyLoadImage
                src={GDdata.image}
                height= {250}
                width= {250}
                effect='blur'
                placeholderSrc={GDdata.image}
                id='marg'
                key = {index}
                />

              
              ))}
              

            </div>
      
          <a href="./Viewmore" target='_blank' id='viewanchor' >View more</a>
          <h2 id='gdski'>Skills</h2>
            <div id='gdskim'>
              {Skills.map((skill, index)=> (

                <img src={skill.image} alt='skills' loading='lazy'  width='50px' id='gdskimage' key={index}/>

              ))}
            </div>

        </div>
      

      <Contact/>
    </div>
  )
}

export default GdHome;
