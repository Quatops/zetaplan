import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import portfolio from 'constants/portfolio.json';
import PortfolioCard from 'components/PorfolioCard';
import Pagenation from 'components/Pagination';
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
  'AI/BIG DATA',
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
  const limit = 8;
  const [activeSector, setActiveSector] = useState(0);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const offset = (page - 1) * limit;
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = () => {};
  const updatePage = (idx) => {
    setPage(idx);
  };
  useEffect(() => {
    const array = portfolio.filter((port, i) => {
      if (
        activeSector === 0 ||
        port.사업분야.indexOf(sectors[activeSector]) >= 0
      ) {
        return port;
      }
    });
    setPage(1);
    setPageItems(array);
  }, [activeSector]);

  useEffect(() => {
    const array = portfolio.filter((port, i) => {
      if (keyword === '' || port.투자업체명.indexOf(keyword) >= 0) {
        return port;
      }
    });
    setPage(1);
    setPageItems(array);
  }, [keyword]);
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.contents_wrapper}>
        <section className={styles.search}>
          <input
            placeholder="검색을 해보세요."
            className={styles.search_input}
            value={keyword}
            onChange={handleChange}
          />
          <button className={styles.search_btn} onSubmit={handleSubmit}>
            Search
          </button>
        </section>
        <section className={styles.sector}>
          <p>sector</p>
          <div className={styles.sector_wrap}>
            {sectors.map((value, index) => (
              <button
                key={index}
                className={`${styles.sector_btn} ${
                  activeSector === index && styles.active
                }`}
                onClick={() => setActiveSector(index)}>
                {value}
              </button>
            ))}
          </div>
        </section>
        <section className={styles.content}>
          <article className={styles.portfolio_wrap}>
            {pageItems.slice(offset, offset + limit).map((port, index) => {
              return <PortfolioCard portfolio={port} key={index} />;
            })}
          </article>
        </section>
        <footer className="flex_center">
          <Pagenation
            limit={limit}
            page={page}
            totalPosts={pageItems.length}
            updatePage={updatePage}
          />
        </footer>
      </div>
    </div>
  );
}
