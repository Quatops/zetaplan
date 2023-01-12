import React, { useState } from 'react';
import styles from './styles.module.css';

export default function AdminSidebar() {
  const menu1 = ['메뉴', '위젯', '홈페이지설정', '안녕하세요'];
  const [activeNav, setActiveNav] = useState(menu1);
  return (
    <nav className={styles.sidebar_wrapper}>
      <ul className={styles.logo}>
        <img src={require('assets/LogoBlack.png')} />
      </ul>
      <ul className={styles.nav_items}>
        {activeNav.map((name, index) => (
          <li key={index} className={styles.nav}>
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
