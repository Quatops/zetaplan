import React from 'react';
import styles from './styles.module.css';

export default function Differentiation() {
  return (
    <div className={styles.contents_wrap}>
      <div className={`${styles.logo_border} flex_center`}>
        <div className={`${styles.center_logo} flex_center`}>
          <img src={require(`assets/LogoBlack.png`)} alt="zetaplan_logo_img" />
        </div>
      </div>
    </div>
  );
}
