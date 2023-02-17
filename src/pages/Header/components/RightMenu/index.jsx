import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { usersReceived } from "../../../../feature/user/userSlice";
import { isEmpty } from "../../../../utils/ultils";
import { logout } from "../../../../services/firebase";

const RightMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    dispatch(usersReceived({}));
  };

  return (
    <div className="rightMenu">
      {isEmpty(user) ? (
        <button className="btnLogin" onClick={handleLogin}>
          <FontAwesomeIcon icon={faCircleUser} className="iconUser" />
          <div>Login</div>
        </button>
      ) : null}

      <button className="btnLogout" onClick={handleLogout}>
        Logout
        <FontAwesomeIcon icon={faRightFromBracket} className="iconUser" />
      </button>
    </div>
  );
};

export default RightMenu;
