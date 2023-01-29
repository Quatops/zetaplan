import ToggleUI from 'components/PostUIs/ToggleUI';
import React from 'react';
import styles from './styles.module.css';

export default function PostUICard({ id }) {
  return (
    <div className={styles.card_wrap}>
      이것들은 ui 컴포넌트들입니다 {id}번입니다.
      <div className={styles.content_wrap}>
        <ToggleUI>안녕하세요</ToggleUI>
      </div>
    </div>
  );
}
