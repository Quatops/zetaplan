import SlickSlider from 'components/Slider';
import { useFooter } from 'hooks/useItems';
import React, { useEffect } from 'react';
import styles from './styles.module.css';

export default function Footer() {
  const {
    FooterQuery: { data: footer },
  } = useFooter();

  return (
    <footer className={styles.footer_wrap}>
      {footer && (
        <>
          <section className={`${styles.logo_wrap} flex_center`}>
            <SlickSlider />
          </section>
          <section className={styles.footer}>
            <article className={styles.footer_left}>
              <p style={{ fontWeight: '600' }}>{footer[0].name}</p>
              <p className={styles.desc}>
                {footer[0].content[0]}
                <br />
                {footer[0].content[1]}
                <br />
                {footer[0].content[2]}
              </p>
            </article>
            <div className={styles.boundary}></div>
            <article className={styles.footer_right}>
              {footer[1].map((value, i) => (
                <div key={i} className={styles.content_row}>
                  <span key={i}>{value.name}</span>
                  <p>{value.content}</p>
                </div>
              ))}
            </article>
          </section>
        </>
      )}
    </footer>
  );
}
