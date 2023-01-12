import React from 'react';
import styles from './styles.module.css';

export default function EditModal({ targetName, updateActiveModal }) {
  return (
    <>
      <div className={`${styles.bg_wrapper} flex_center`}>
        <div
          className={styles.back_area}
          onClick={() => {
            updateActiveModal(false);
            console.log('안녕여기클릭했구나.');
          }}></div>
        <div className={`${styles.modal_wrap} flex_center`}>
          관리자인데용?? + {targetName}
        </div>
      </div>
    </>
  );
}
