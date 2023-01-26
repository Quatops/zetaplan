import React from 'react';
import Slider from 'react-slick';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: <FiChevronRight />,
  prevArrow: <FiChevronLeft />,
};
export default function SlickSlider() {
  return (
    <>
      <Slider {...settings}>
        {new Array(6).fill('').map((_, i) => (
          <div className="slider_img">
            <img src={require(`assets/logo${i}.png`)} />
          </div>
        ))}
      </Slider>
    </>
  );
}
