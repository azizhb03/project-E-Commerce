import React from 'react'
import './Footer.css'
export const Footer = () => {
  const customStyle = {
    width: "300px",
    height: "150px",
    // add more style properties as needed
  };
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291811/g7dmw3y9uhcsl8fisbpo.png"} alt="" style={customStyle}/>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
            <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291680/zic39fvua0cvuj2p2njr.png"} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291682/xw9ksotpezlemj6pfrv9.png"} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={"https://res.cloudinary.com/diqntq8l2/image/upload/v1702291687/uxxi4saihnxclzipbt6f.png"} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved. </p>

      </div>
    </div>
  )
}
