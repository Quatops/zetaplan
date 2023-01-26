import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import styles from './styles.module.css';

export default function MainAsideBtn2({ aside_btn2 }) {
  return (
    <div className={styles.etc_button_wrapper}>
      {aside_btn2.map((btn, index) => (
        <button className={styles.etc_btn} key={index}>
          <div className="flex_center">
            <div className={styles.etc_icon}>
              <img src={btn.src} alt="icon" />
            </div>
            {btn.name}
          </div>
          <FaAngleRight />
        </button>
      ))}
    </div>
  );
}
