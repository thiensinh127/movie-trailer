import React, { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import { Drawer, Button } from "antd";
import Logo from "../../assets/img/web-logo.png";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <nav className="Header">
      <div className="logo">
        <img className="img" src={Logo} alt="" />
      </div>
      <LeftMenu />
      <RightMenu />

      <Button className="barsMenu" onClick={showDrawer}>
        <span className="barsBtn" />
      </Button>
      <Drawer
        title={<RightMenu />}
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
        className="drawer"
        width={250}
      >
        <LeftMenu />
      </Drawer>
    </nav>
  );
};

export default Header;
