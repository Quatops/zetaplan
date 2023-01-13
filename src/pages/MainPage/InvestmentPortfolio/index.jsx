import React, { useState } from 'react';
import styles from './styles.module.css';
import portfolio from 'constants/portfolio.json';
import PortfolioCard from 'components/PorfolioCard';
const sectors = [
  'ALL',
  '소재부품장비',
  'ICT/IOT',
  '콘텐츠',
  '게임',
  '에듀테크',
  'VR/AR',
  '농업/수산',
  '드론/항공',
  '뷰티',
  '생활/가전',
  'AI/Big data',
  '보안',
  '핀테크',
  '블록체인',
  '환경/에너지',
  '커머스',
  '물류',
  '푸드테크',
  '패션',
];

export default function InvestmentPortfolio() {
  const [pageItems, setPageItems] = useState(portfolio);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.contents_wrapper}>
        <section className={styles.search}>
          <input
            placeholder="검색을 해보세요."
            className={styles.search_input}
          />
          <button className={styles.search_btn}>Search</button>
        </section>
        <section className={styles.sector}>
          <p>sector</p>
          {sectors.map((value, index) => (
            <button key={index} className={styles.sector_btn}>
              {value}
            </button>
          ))}
        </section>
        <section className={styles.content}>
          <article className={styles.portfolio_wrap}>
            {pageItems.slice(offset, offset + limit).map((portfolio, index) => (
              <PortfolioCard portfolio={portfolio} key={index} />
            ))}
          </article>
        </section>
      </div>
    </div>
  );
}
