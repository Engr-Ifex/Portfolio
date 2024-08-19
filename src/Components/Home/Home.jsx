import React from 'react'
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect'
import wdgd from './wdgd.png'
import ResNavbar from './resnavbar';
import './Hero.css';


function Home() {
  return (
    <div id="all">
     <div id='home-container'>
      <Navbar logo='IFEX.'/>
      <ResNavbar logo='IFEX.'/>
     <div id="text">
        <div id='candl'
        >
          <div id='circle'></div>
          <div id='line'></div>
        </div>
        <div id="txt">
          <div id='intro'>
              <h1 id="greetings">Hi there</h1>
              <h1 id="name">I'm Adesoji Ifeoluwapo</h1>
              <p id="skill">I am a  
                <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings:[
                  " Web Developer", " Graphics Designer",
                  ],
                }}
                />
             
              </p>
            </div>
            <div>
              <p id="service">
                My services helps businesses to gain high visibility which in turn
                leads to increased sales, with attractive visuals and effective
                communication of ideas
              </p>
            </div>
        </div>
     </div>
      </div>

      <div id='wdgdcont'>
      <img src={wdgd} alt="img" width='650px' id='wdgd'/>
      </div>
    </div>
  )
}

export default Home;
