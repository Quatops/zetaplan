import React from "react";
import Carousel from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function index() {
  return (
    <Carousel>
      <div>
        <img src={require("../../assets/banner_img.png")} />
        <p className="legend">banner 1</p>
      </div>
      <div>
        <img src={require("../../assets/banner_img.png")} />
        <p className="legend">banner 2</p>
      </div>
    </Carousel>
  );
}
