import React from 'react';
import styles from './styles.module.css';

export default function ToggleUI({ children }) {
  return (
    <div className={styles.card_ui}>
      <div className={styles.prefix}>
        <img src={require(`assets/toggle.png`)} />
      </div>
      <div className={`${styles.content_wrap} flex_center`}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
