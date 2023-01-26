import React from 'react';
import styles from './styles.module.css';

export default function MainAsideBtn1({ aside_btn1 }) {
  return (
    <>
      {aside_btn1.map((value, index) => (
        <button className={styles.ass_btn} key={index}>
          <div className={styles.ass_icon}>
            <img src={value.src} alt="icon" />
          </div>
          <p className={styles.ass_name}>{value.name}</p>
        </button>
      ))}
    </>
  );
}
