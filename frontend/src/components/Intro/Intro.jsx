import React from "react";
import "./intro.css";
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { RiContactsBookLine } from "react-icons/Ri";
import { HiOutlineLocationMarker } from "react-icons/Hi";
import { LiaFacebook } from "react-icons/Lia";
import { FiTwitter } from "react-icons/Fi";
import { CiLinkedin } from "react-icons/Ci";
import img from "../../assets/logo.png";

const Intro = () => {
  return (
    <>
      {/* <div className="intro1">
        <p className="welcomeMsg">Welcome to e-nyayaSeva!</p>
        <a className="right" href="">About Us</a>
        <a className="right" href="">Contact Us</a>
      </div> */}
      <div className="intro2">
        <div className="logo">
          <img src={img}></img>
          <h2>e-nyaya<span>Seva</span></h2>
        </div>
        <div className="contact">
          <RiContactsBookLine
            className="a"
          />
          <h4 className="b">1234567890</h4>
          <span className="c">enyayseva@gmail.com</span>
        </div>
        <div className="address">
          <HiOutlineLocationMarker
            className="a"
          />
          <h4 className="b">Behala</h4>
          <span className="c">MR street</span>
        </div>
        <div className="socials">
          <p>
            <a href="">
              <LiaFacebook
                style={{ width: "1.5rem", height: "1.5rem", color: "orangered" }}
              />
            </a>
          </p>
          <p>
            <a href="">
              <FiTwitter
                style={{ width: "1.3rem", height: "1.3rem", color: "orangered" }}
              />
            </a>
          </p>
          <p>
            <a href="">
              <CiLinkedin
                style={{ width: "1.5rem", height: "1.5rem", color: "orangered" }}
              />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
