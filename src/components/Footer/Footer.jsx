import React from "react";
import "./Footer.scss";
import logo from "../../img/Logo.png";
import payment from "../../img/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Threads & Runway is your online fashion destination for curated
            style at accessible prices. Shop trendy clothes, find outfit
            inspiration, and enjoy a seamless shopping experience with easy
            returns. Discover quality brands, inclusive sizing, and sustainable
            options - all to help you look and feel confident!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            <p>nitin.kumawat.jaipur.in@gmail.com</p>
           <p>+91 76659 00683</p>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={logo} alt="" className="logo" />
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
