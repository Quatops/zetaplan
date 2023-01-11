import React, { useRef } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';

export default function AdminPostRegist() {
  return (
    <div className={styles.admin_wrap}>
      <TextEditor />
    </div>
  );
}
