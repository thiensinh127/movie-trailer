import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
faRightFromBracket;
const RightMenu = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="rightMenu">
      <button className="btnLogin" onClick={handleLogin}>
        <FontAwesomeIcon icon={faCircleUser} className="iconUser" />
        <div>Login</div>
      </button>
      <button className="btnLogout">
        Logout
        <FontAwesomeIcon icon={faRightFromBracket} className="iconUser" />
      </button>
    </div>
  );
};

export default RightMenu;
