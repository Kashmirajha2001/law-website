import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = (props) => {
  const navigate = useNavigate();
  const navigateToCommunity = () => {
    navigate("/Community");
  };
  const navigateToAttorneys = () => {
    navigate("/Attorneys");
  };

  return (
    <div className="navDropDownMenu">
      <div className="navDropDown">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        {props.storedCredentials ? (
          <li>
            <a onClick={navigateToCommunity}>Community</a>
          </li>
        ) : (
          ""
        )}
        {props.storedCredentials ? (
          <li>
            <a onClick={navigateToAttorneys}>Find legal Professionals</a>
          </li>
        ) : (
          ""
        )}
        <li></li>
      </div>
    </div>
  );
};

export default DropDown;
