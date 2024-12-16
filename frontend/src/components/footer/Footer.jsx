import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  twitter_icon,
  facebook_icon,
  linkedin_icon,
} from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={logo} alt="" />
          <p>
            Delivering excellence with every meal. Explore our menu for a
            delightful dining experience. Quality, taste, and satisfaction
            guaranteed.
          </p>
          <div className="footer-social-icons">
            <img src={twitter_icon} alt="" />
            <img src={facebook_icon} alt="" />
            <img src={linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 776 562 7895</li>
            <li>contact@cook.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Cook.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
