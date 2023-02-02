import React from 'react';
import styles from './styles.module.css';

export default function SubmitButton({ children, widthSize, handleClick }) {
  return (
    <button
      style={{ width: widthSize }}
      className={`${styles.button} flex_center`}
      onClick={handleClick}>
      {children}
    </button>
  );
}
