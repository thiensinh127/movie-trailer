import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../../components/Carousel";
import { usersLoading, usersReceived } from "../../feature/user/userSlice";
import Footer from "../../pages/Footer";
import Header from "../../pages/Header";
import { isEmpty } from "../../utils/ultils";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const userObj = JSON.parse(userString);
    if (!isEmpty(userObj)) {
      dispatch(usersLoading());
      dispatch(usersReceived(userObj));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
};

export default MainLayout;
