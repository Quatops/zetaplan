import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { FaAngleRight } from 'react-icons/fa';

export default function SubNavbar({
  navItems,
  navTitle,
  updateActiveNavId,
  activeNavId,
}) {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_title}>{navTitle}</div>
      <ul className={styles.nav}>
        {navItems.map((value) => (
          <NavLink
            key={value.id}
            className="subnav_nav_items"
            onClick={() => updateActiveNavId(value.id)}
            to={value.path}>
            <p>{value.title}</p>
            <p className="subnav_rightbtn">
              <FaAngleRight />
            </p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
