import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaEdit } from 'react-icons/fa';
import EditModal from 'components/Modal';

export default function EditButton({ activeEdit, idx, updateActiveEdit }) {
  return (
    <>
      {activeEdit === 1 ? (
        <button
          className={styles.submit_btn}
          onClick={() => updateActiveEdit(0)}>
          완료하기
        </button>
      ) : (
        <p
          className={`${styles.edit_btn} flex_center`}
          onClick={() => updateActiveEdit(idx)}>
          <FaEdit></FaEdit>
        </p>
      )}
    </>
  );
}
