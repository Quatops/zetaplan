import React from 'react';
import Slider from 'react-slick';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function BannerCarousel({ bannerImages }) {
  return (
    <>
      <Slider {...settings}>
        {bannerImages.map((value, index) => (
          <div className="slider_banner_wrapper flex_center" key={index}>
            <img src={value} alt="배너이미지" className="slider_banner_img" />
          </div>
        ))}
      </Slider>
    </>
  );
}
