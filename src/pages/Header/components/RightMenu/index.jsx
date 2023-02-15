import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
      <div>Logout</div>
    </div>
  );
};

export default RightMenu;
