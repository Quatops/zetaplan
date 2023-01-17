import React from 'react';
import styles from './styles.module.css';

export default function Loading() {
  return (
    <div className={`${styles.loading_wrap} flex_center`}>로딩중입니다.</div>
  );
}
