import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
    
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("credentials");
    window.location.reload();
  }

  return (
    <div className="navProfileDropDownMenu">
      <div className="navProfileDropDown">
        <li>
          <a onClick={navigateToDashboard}>Account</a>
        </li>
        <div className="horizontal-line"></div>
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </div>
    </div>
  );
};

export default DropDown;
