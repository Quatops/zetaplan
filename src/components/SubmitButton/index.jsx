import React from 'react';
import styles from './styles.module.css';

export default function SubmitButton({ children, widthSize }) {
  return (
    <button
      style={{ width: widthSize }}
      className={`${styles.button} flex_center`}>
      {children}
    </button>
  );
}
