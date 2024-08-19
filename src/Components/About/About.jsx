import React from 'react'
import './About.css';
import ball2 from './images/ball2.png'

function About() {
  return (
    <div id='cont'>
      <div id="about">
        <div id='abouttext'>
          <p>Introduction</p>
          <h1>Overview</h1>
          <p>I'm a dedicated web developer who thrives on the art of turning lines of code into seamless digital experiences. I'm passionate about crafting functional, responsive and visually appealing websites that not only look great but also provide exceptional user experiences.
          Am also a passionate graphics designer with an affection for bringing creative visions to life through captivating visuals. I strive to craft designs that not only catch the eye but also resonate deeply with the viewer.
          Beyond these, I'm a problem solver, a lifelong learner, and a curious explorer of emerging technologies.
          </p>
        </div>
        <div id='aboutimages'>
          <img src={ball2} alt="spherical ball" loading='lazy' id='ball2'/>
          <div id="shadow"></div>
        </div>
      </div>
    </div>
  )
}

export default About
