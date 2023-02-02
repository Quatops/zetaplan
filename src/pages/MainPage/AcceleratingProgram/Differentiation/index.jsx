import React from 'react';
import styles from './styles.module.css';

const colorArray = ['96b4d9', '627995', '517cb1', '3565a0', '003a80', '00316c'];

export default function Differentiation({ differentiations }) {
  return (
    <div className={`${styles.logo_border} flex_center`}>
      {differentiations.map((diff, index) => (
        <div
          className={`${styles.icons} flex_center`}
          style={{ backgroundColor: `#${colorArray[index]}` }}>
          <div className={styles.icons_img}>
            <img src={require(`assets/diffrence_${index}.png`)} alt="icon" />
          </div>
          <div
            className={`${styles.info} ${
              index < 3 ? styles.right : styles.left
            }`}>
            <header
              className={styles.info_title}
              style={{ color: `#${colorArray[index]}` }}>
              {diff.title}
              <div
                className={`${styles.boundary} ${
                  index < 3 ? styles.right : styles.left
                }`}
                style={{ backgroundColor: `#${colorArray[index]}` }}></div>
            </header>
            <article>
              <ul className={styles.desc}>
                {diff.content.map((value, index) => (
                  <li>{value}</li>
                ))}
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
