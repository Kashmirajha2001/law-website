import { React, useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import "./nav.css";
// import login from '../Login/login'

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar} >
          <img src={Hamburger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="../Login/login.jsx">login</a>
            </li>
            <li>
              <a href="">SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
