import React from 'react';
import styles from './styles.module.css';

export default function StepCard({ title_eng, title_desc, title, bg_color }) {
  return (
    <div className={styles.card_wrap}>
      <header>
        <div className={styles.title_desc} style={{ color: `${bg_color}` }}>
          <span>{title_eng}</span>
          <span style={{ fontWeight: '200' }}>| {title_desc}</span>
        </div>
        <div
          className={`${styles.title} flex_center`}
          style={{ backgroundColor: `${bg_color}` }}>
          {title}
        </div>
      </header>
      <section>
        <div className={styles.content}></div>
      </section>
    </div>
  );
}
