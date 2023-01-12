import React from 'react';
import styles from './styles.module.css';

const sectorBtn = (name) => {
  return <button className={styles.sector_btn}>{name}</button>;
};
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

const portfolios = [
  {
    logo: '',
    from: '제타법인',
    name: '소재의 맥',
    intro: '문서 출력물 보안 솔루션',
    tags: ['소재부품장비', '보안'],
  },
  {
    logo: '',
    from: '제타법인',
    name: '소재의 맥',
    intro: '문서 출력물 보안 솔루션',
    tags: ['소재부품장비', '보안'],
  },
];
export default function InvestmentPortfolio() {
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
            <>{sectorBtn(value)}</>
          ))}
        </section>
        <section className={styles.content}></section>
      </div>
    </div>
  );
}
