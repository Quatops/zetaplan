import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BannerCarousel({ bannerImages }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.banner_swiper}>
        {bannerImages.map((value, index) => (
          <SwiperSlide key={index}>
            <div className={styles.banner_wrapper}>
              <img src={value} alt="배너이미지" className={styles.banner_img} />
              <p className="legend">{value}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
