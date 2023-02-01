import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import styles from './styles.module.css';

import { useNavigate } from 'react-router-dom';

export default function MainAsideBtn2({ aside_btn2 }) {
  const navigate = useNavigate();
  return (
    <div className={styles.etc_button_wrapper}>
      {aside_btn2.map((btn, index) => (
        <button
          className={styles.etc_btn}
          key={index}
          onClick={() => navigate(`/voucher/${btn.path}`)}>
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
