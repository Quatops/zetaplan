import React, { useRef } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';

export default function AdminPostRegist() {
  return (
    <div className={`${styles.admin_wrap} flex_center`}>
      <header className={styles.header_temp}>네비</header>
      <div className={styles.text_area}>
        <TextEditor />
      </div>
      <button className={styles.submit_btn}>저장하기</button>
    </div>
  );
}
