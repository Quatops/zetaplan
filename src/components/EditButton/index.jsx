import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaEdit } from 'react-icons/fa';
import EditModal from 'components/EditModal';

export default function EditButton({ idx, updateActiveEdit }) {
  return (
    <>
      <p
        className={`${styles.edit_btn} flex_center`}
        onClick={() => updateActiveEdit(idx)}>
        <FaEdit></FaEdit>
      </p>
    </>
  );
}
