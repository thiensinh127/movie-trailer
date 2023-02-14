import React from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../pages/Footer";
import Header from "../../pages/Header";

const MainLayout = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
};

export default MainLayout;
