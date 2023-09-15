import React from "react";
import "./footer.css";
import img from "../../assets/logo.png";
import { ImLocation } from "react-icons/Im";
import { IoMdCall } from "react-icons/Io";
import { FiMail } from "react-icons/Fi";

const Footer = () => {
  return (
    <div className="footerBox">
      <div className="containerFooter">
        <div className="row" style={{"padding-right":"2rem",}}>
          <div className="column">
            <div className="logoFooter">
              <img src={img}></img>
              <h2>
                e-nyaya<span>Seva</span>
              </h2>
            </div>
            <a className="footerLink">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a id officiis quod facilis molestias corporis optio exercitationem! Est, voluptas!
            </a>
            <a className="footerLink"><ImLocation
            className="a"
          />
              Behala, MR Street
            </a>
            <a className="footerLink"><IoMdCall
            className="a"
          />
              9876543210
            </a>
            <a className="footerLink"><FiMail
            className="a"
          />
              enyayseva@gmail.com
            </a>
          </div>
          <div className="column">
            <p className="heading">Quick Links</p>
            <a className="footerLink" href="#">
              Support Forums
            </a>
            <a className="footerLink" href="#">
              FAQ & Help Center
            </a>
            <a className="footerLink" href="#">
              Register an Account
            </a>
            <a className="footerLink" href="#">
              Login with Account
            </a>
            <a className="footerLink" href="#">
              Terms and conditions
            </a>
          </div>
        </div>
        <div className="row">
        <div className="column">
            <p className="heading">Our Practice Areas</p>
            <a className="footerLink" href="#">
              Civil Litigation
            </a>
            <a className="footerLink" href="#">
              Business Taxation
            </a>
            <a className="footerLink" href="#">
              family Law
            </a>
            <a className="footerLink" href="#">
              Education Law
            </a>
            <a className="footerLink" href="#">
              Trade and Finance Law
            </a>
            <a className="footerLink" href="#">
              Accident injuries
            </a>
          </div>
          <div className="column">
            <p className="heading">Connect With Us</p>
            <a className="footerLink" href="#">
              Facebook
            </a>
            <a className="footerLink" href="#">
              Instagram
            </a>
            <a className="footerLink" href="#">
             Twitter
            </a>
            <a className="footerLink" href="#">
              Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <hr />
        <p>Copyrights 2023 <span>e-nyayaSeva Pvt. Ltd</span>.All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
