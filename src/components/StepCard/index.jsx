import React, { useState } from 'react';
import styles from './styles.module.css';

export default function StepCard({
  title_eng,
  title_desc,
  title,
  bg_color,
  program,
}) {
  const [activeEditBtn, setActiveEditBtn] = useState(false);
  return (
    <div
      className={styles.card_wrap}
      onMouseEnter={() => setActiveEditBtn(true)}
      onMouseLeave={() => setActiveEditBtn(false)}>
      <header>
        <div className={styles.title_desc} style={{ color: `${bg_color}` }}>
          <span>{title_eng}</span>
          <span style={{ fontWeight: '200' }}>| {title_desc}</span>
        </div>
        <div
          className={`${styles.title} flex_center`}
          style={{
            backgroundColor: `${bg_color}`,
            '--bg_color': bg_color,
          }}>
          {title}
        </div>
      </header>
      <section>
        {program.map((v, index) => (
          <div className={styles.contents}>
            <p className={styles.content_title}>{v.title}</p>
            <ul className={styles.content}>
              {v.content.map((c, i) => (
                <li>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
