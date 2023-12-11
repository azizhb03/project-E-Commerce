import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon'
import arrow_icon from '../assets/arrow_icon'
import hero_image from '../assets/hero_image'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New arrivals only</h2>
            <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=""></img>
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-latest-btn"></div>
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
            </div>
             </div>
       
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>
    </div>
  )
}
