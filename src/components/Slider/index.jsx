import React from 'react';
import Slider from 'react-slick';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  // prevArrow: <FiChevronLeft />,
  // nextArrow: <FiChevronRight />,
};
export default function SlickSlider() {
  return (
    <>
      <Slider {...settings}>
        {new Array(6).fill('').map((_, i) => (
          <div className="slider_img" key={i}>
            <img src={require(`assets/logo${i}.png`)} alt="slider_logo" />
          </div>
        ))}
      </Slider>
    </>
  );
}
