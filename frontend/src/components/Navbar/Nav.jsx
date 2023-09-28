import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import "./nav.css";
import { useNavigate } from 'react-router-dom';
import Community from "../CommunitySection/Community";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navigate = useNavigate()
  const navigateToLogin = () =>{
      navigate("/Login")
  };

  const navigateToSignUp = () =>{
    navigate("/SignUp")
  };

  return (
    <div>
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
            {storedCredentials ? (
              <li>
                <a onClick={() => setIsOpen(!isOpen)}>Community</a>
              </li>
            ) : ''}
            
              {storedCredentials ? 
                null :
                (
                <li>
                  <a onClick={navigateToLogin}>login</a>
                </li>
              )}
              {storedCredentials ? 
                null :
                (
                  <li>
                    <a onClick={navigateToSignUp}>SignUp</a>
                  </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
    {isOpen ? <Community/> : ''}
    </div>
  );
};

export default Nav;
