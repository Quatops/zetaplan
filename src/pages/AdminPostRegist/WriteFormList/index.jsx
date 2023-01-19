import PostUICard from 'components/PostUICard';
import React from 'react';
import styles from './styles.module.css';

export default function WriteFormList() {
  return (
    <div className={styles.form_wrap}>
      <p className={styles.title}>요소들</p>
      <section className={styles.form_list}>
        {new Array(5).fill(0).map((_, i) => (
          <PostUICard id={i} key={i} />
        ))}
      </section>
    </div>
  );
}
