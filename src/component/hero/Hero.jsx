import React from "react";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291680/blirokswg2tro4nqvwpq.png"} alt=""></img>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291678/gt7snpoxj5igz2kfv8ud.pnghttps://res.cloudinary.com/diqntq8l2/image/upload/v1702291678/gt7snpoxj5igz2kfv8ud.png"} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
export default Hero;
