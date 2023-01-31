import React from 'react';
import styles from './styles.module.css';

const colorArray = ['96b4d9', '627995', '517cb1', '3565a0', '003a80', '00316c'];
export default function Differentiation() {
  return (
    <div className={`${styles.logo_border} flex_center`}>
      {colorArray.map((color, index) => (
        <div
          className={`${styles.icons} flex_center`}
          style={{ backgroundColor: `#${color}` }}>
          <img src={require(`assets/accelerating_icon.png`)} alt="icon" />
          <div
            className={`${styles.info} ${
              index < 3 ? styles.right : styles.left
            }`}>
            <header
              className={styles.info_title}
              style={{ color: `#${color}` }}>
              투자유치 프로그램 및 데모데이(자체/연계)
              <div
                className={`${styles.boundary} ${
                  index < 3 ? styles.right : styles.left
                }`}
                style={{ backgroundColor: `#${color}` }}></div>
            </header>
            <article>
              <ul className={styles.desc}>
                <li> 년간 15개 이상 투자유치 프로그램 운영</li>
                <li> 인포뱅크-ZETA 시드팁스 등 150개 이상 VC 연계지원</li>
              </ul>
            </article>
          </div>
        </div>
      ))}
      <div className={`${styles.center_logo} flex_center`}>
        <img src={require(`assets/LogoBlack.png`)} alt="zetaplan_logo_img" />
      </div>
    </div>
  );
}
