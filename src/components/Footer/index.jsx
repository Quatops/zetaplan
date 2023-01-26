import SlickSlider from 'components/Slider';
import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_wrap}>
      <section className={`${styles.logo_wrap} flex_center`}>
        <SlickSlider />
      </section>
      <section className={styles.footer}>
        <article className={styles.footer_left}>
          <p style={{ fontWeight: '600' }}>Zeta Plan Investment Co., Ltd. </p>
          <p className={styles.desc}>
            정보관리책임자 기철 | 사업자등록번호 120-87-36351
            <br />
            중소기업상담회사 제2010-397호 | 기술거래기관 제2016-48호
            <br />
            사업화전문회사 제2017-96호 | 엑셀러레이터 제2018-60호
          </p>
        </article>
        <div className={styles.boundary}></div>
        <article className={styles.footer_right}>
          <span>서울본사 (08505)</span>
          <p>서울 금천구 가산디지털2로 101, 한라원앤원타워 601호</p>
          <span>China Office </span>
          <p>
            6F, Beiguang Building, No.23, Huangsi Street, Xicheng District,
            Beijing, China
          </p>
          <span>Vietnam Office </span>
          <p>
            No 241, Tang Thiet Giap Apt, 110 Hoang Quoc Viet Street, Cau Giay
            District, Hanoi, VietNam
          </p>
          <span>Ini Office</span>
          <p>
            2 Jl Jenderal Gatot Subroto Kav.58, Kuningan Timur setiabudi Jakarta
            Selatan, Indonesia
          </p>
        </article>
      </section>
    </footer>
  );
}
