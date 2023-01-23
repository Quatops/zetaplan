import React from 'react';
import styles from './styles.module.css';

export default function Modal({ updateIsActiveModal, children }) {
  return (
    <>
      <div className={`${styles.bg_wrapper} flex_center`}>
        <div
          className={styles.back_area}
          onClick={() => {
            updateIsActiveModal(false);
          }}></div>
        <div className={`${styles.modal_wrap} flex_center`}>{children}</div>
      </div>
    </>
  );
}
