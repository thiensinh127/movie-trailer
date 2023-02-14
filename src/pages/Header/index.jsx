import React, { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import { Drawer, Button } from "antd";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="www.marca.com">logo</a>
      </div>
      <div className="leftMenu">
        <LeftMenu />
      </div>
      <div className="rightMenu">
        <RightMenu />
      </div>
      <Button className="barsMenu" onClick={showDrawer}>
        <span className="barsBtn" />
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <LeftMenu />
        <RightMenu />
      </Drawer>
    </nav>
  );
};

export default Header;
