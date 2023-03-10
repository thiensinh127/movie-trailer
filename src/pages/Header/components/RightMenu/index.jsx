import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersReceived } from "../../../../feature/user/userSlice";
import { logout } from "../../../../services/firebase";
import { isEmpty } from "../../../../utils/ultils";
import { usersLoading } from "../../../../feature/user/userSlice";

const RightMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log("🚀 ~ user", user);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    dispatch(usersLoading());
    dispatch(usersReceived({}));
  };

  const items = [
    {
      key: "1",
      label: (
        <>
          <button className="btnLogout" onClick={handleLogout}>
            Logout
          </button>
          <FontAwesomeIcon icon={faRightFromBracket} className="iconUser" />
        </>
      ),
    },
  ];

  return (
    <div className="rightMenu">
      {isEmpty(user) ? (
        <button className="btnLogin" onClick={handleLogin}>
          <div>Login</div>
        </button>
      ) : null}
      {!isEmpty(user) ? (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Space>
            <FontAwesomeIcon icon={faCircleUser} className="iconUser" />
          </Space>
        </Dropdown>
      ) : null}
    </div>
  );
};

export default RightMenu;
