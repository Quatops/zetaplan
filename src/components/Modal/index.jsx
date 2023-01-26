import React from 'react';
import styles from './styles.module.css';

export default function Modal({ children, updateActiveModal, modalSize }) {
  return (
    <>
      <div className={`${styles.bg_wrapper} flex_center`}>
        <div
          className={styles.back_area}
          onClick={() => {
            updateActiveModal(false);
          }}></div>
        <div className={`${styles.modal_wrap} flex_center`} style={modalSize}>
          {children}
        </div>
      </div>
    </>
  );
}
