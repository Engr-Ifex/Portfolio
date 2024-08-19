import React from 'react'
import Vdata from './Viewdata'
import './Gdhome.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';



function View() {
  return (
    <div id='viewmore'>
    


<div id='row'>
              {Vdata.map((GDdata, index) => (

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
    </div>
  )
}

export default View;