import { React, useEffect, useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import "./nav.css";
import DropDown from "./DropDown";
import ProfileDropDown from "./ProfileDropDown";
import { useNavigate } from "react-router-dom";
import adminImg from "../../assets/images/adminProfile.png";
import ListIcon from '@mui/icons-material/List';

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
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
              <a onClick={navigateToContact}>Contact Us</a>
            </li>

            <li onClick={()=>setOpenDropDown((prev)=> !prev)}>
              <a style={{position:"absolute", top:"33%", left:"31.5%"}}>Menu</a><ListIcon style={{ height: "2rem", width: "2rem", color:"#FFFF", cursor:"pointer" }}/>
            </li>
            {openDropDown && <DropDown storedCredentials="true"/>}
            
            {storedCredentials ? (
              <li style={{position:"relative", left:"150%"}} onClick={()=>setOpenProfileDropDown((prev)=> !prev)}>
                <a><img className="profile-img" src={adminImg} alt="admin.png"/></a>
                <a style={{ position:"absolute", top:"20%"}} >Adnan</a>
              </li>
            ) : (
              <li>
                  <a onClick={navigateToLogin}>Login</a>
                  <a onClick={navigateToSignUp}>Sign Up</a>
                </li>
            )}
          </ul>
          {openProfileDropDown && <ProfileDropDown/>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
