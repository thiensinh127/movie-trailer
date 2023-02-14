import React from "react";
import { Carousel } from "antd";
import Carousel_1 from "../../assets/img/background_image1.jpg";
import Carousel_2 from "../../assets/img/background_image2.jpg";
import Carousel_3 from "../../assets/img/background_image3.jpg";

const BackGround = () => {
  return (
    <Carousel
      className="Carousel"
      swipeToSlide
      draggable
      autoplay
      infinite="true"
    >
      <div>
        <img src={Carousel_1} alt="" />
      </div>
      <div>
        <img src={Carousel_2} alt="" />
      </div>
      <div>
        <img src={Carousel_3} alt="" />
      </div>
    </Carousel>
  );
};

export default BackGround;
