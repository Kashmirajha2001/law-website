import { React, useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import adminImg from "../../assets/images/adminProfile.png";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
  };

  const navigateToSignUp = () => {
    navigate("/SignUp");
  };

  const navigateToAbout = () => {
    navigate("/About");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToCommunity = () => {
    navigate("/Community");
  };

  const navigateToContact = () => {
    navigate("/Contact");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a onClick={navigateToHome}>Home</a>
            </li>
            <li>
              <a onClick={navigateToAbout}>About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            {storedCredentials ? (
              <li>
                <a onClick={navigateToCommunity}>Community</a>
              </li>
            ) : (
              ""
            )}
            {/* <li>
              <a onClick={navigateToCommunity}>Community</a>
            </li> */}
            <li>
              <a onClick={navigateToContact}>Contact Us</a>
            </li>
            {storedCredentials ? (
              <img className="profile-img" src={adminImg} alt="admin.png" />
            ) : (
              ""
            )}
            {storedCredentials ? <h4 style={{ color: "#fff" }}>Admin</h4> : ""}

            {storedCredentials ? null : (
              <li>
                <a onClick={navigateToLogin}>login</a>
              </li>
            )}
            {storedCredentials ? null : (
              <li>
                <a onClick={navigateToSignUp}>SignUp</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
