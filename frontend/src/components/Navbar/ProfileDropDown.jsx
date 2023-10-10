import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
    
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="navProfileDropDownMenu">
      <div className="navProfileDropDown">
        <li>
          <a onClick={navigateToDashboard}>Account</a>
        </li>
        <div className="horizontal-line"></div>
        <li>
          <a onClick={()=>localStorage.clear()}>Logout</a>
        </li>
        <li></li>
      </div>
    </div>
  );
};

export default DropDown;
