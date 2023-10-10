import React from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const DropDown = () => {
  const navigate = useNavigate();
    
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="navProfileDropDownMenu">
      <div className="navProfileDropDown">
        <li>
          <a onClick={navigateToDashboard}><AccountCircleIcon style={{position:"relative", top:"8px", paddingRight:"10px"}}/>Account</a>
        </li>
        <div className="horizontal-line"></div>
        <li>
          <a onClick={handleLogout}>Logout<LogoutIcon style={{position:"relative", top:"8px", paddingRight:"10px"}}/>Logout</a>
        </li>
        <li></li>
      </div>
    </div>
  );
};

export default DropDown;
