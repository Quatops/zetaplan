import React, { useEffect } from 'react';
import styles from './styles.module.css';

export default function PortfolioCard({ portfolio }) {
  useEffect(() => {
    portfolio.사업분야.split(', ');
  }, [portfolio]);
  return (
    <div className={styles.portfolio_wrap}>
      <article className={`${styles.logo} flex_center`}>
        <img src={require(`assets/${portfolio.logo}.png`)} alt="port_logo" />
      </article>
      <article className={styles.invest_info}>
        <div className={styles.invest_name}>
          <span className={styles.subject}>{portfolio.투자주체}</span>
          <span className={styles.name}>{portfolio.투자업체명}</span>
          <div className={styles.line}></div>
        </div>
        <p className={styles.summary}>{portfolio.기업한줄요약}</p>
      </article>
      <article className={styles.tags}>
        {portfolio.사업분야.split(', ').map((value, index) => (
          <button key={index} className={styles.button}>
            {value}
          </button>
        ))}
      </article>
    </div>
  );
}
