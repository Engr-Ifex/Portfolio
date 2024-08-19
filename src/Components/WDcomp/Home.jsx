import React from 'react'
import './Wdhome.css'
import Contact from '../Contact/Contact';
import Branchnav from './Branchnav';
import Tilt from 'react-parallax-tilt'
import {Projects, skills} from './Wdprojects'
import ResbranchNavbar from './Resbranchnav'


function WdHome() {
  return (
    <div id='wdhero'>
    
         <div id="wdfirst">
             <Branchnav logo='ENGR IFEX.'/>
             <ResbranchNavbar logo='ENGR IFEX.'/>
                     <div id='wdcont'>
                <div id='wdconttext'>
                    <h1>Web Developer</h1>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias eius laudantium quae nemo debitis excepturi mollitia dicta repudiandae doloremque.</p> */}
                </div>
              
                     </div>
         </div>



        <div id='wdsecond'>
          <p>My Works</p>
          <h1>Projects</h1>
  
            <div id='jcards'>

              {Projects.map((prj, index) => (

                    <Tilt
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    key={index}
                    >
                <div id='prjcards'>
                  <img src={prj.image} alt="" loading='lazy'  id='wdimage' width='250px'/>
                  <p>{prj.name}</p>
                  <div id="anchor">
                    <button id='cardbtngreen'><a href={prj.live_link} target='_blank' rel='noreferrer' required id='greena'>#live_link</a></button>
                    <button id='cardbtnred'><a href={prj.github_link} target='_blank' rel='noreferrer' required id='reda'>#github_link</a></button>
                  </div>
                </div>
                </Tilt>


              ))}
                 
            </div>

            <h2 id='ski'>Skills</h2>
            <div id='skillimages'>
              {skills.map((skill, index) => (

                  <div id='imgpara'> <img src={skill.image} alt="skills" loading='lazy' width='50px' key={index}/> <p id='skiname'>{skill.name}</p></div>

              ))}
               
            </div>
 

        </div>
        
      

      <Contact/> 
    </div>
  )
}

export default WdHome;