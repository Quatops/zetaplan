import React from 'react';
import styles from './styles.module.css';
import { category, subCategory } from '../../../constants/category';
import { NavLink } from 'react-router-dom';
import EditButton from 'components/EditButton';

export default function GlobalNavigator({ categoryHover }) {
  return (
    <nav className={styles.nav_wrapper}>
      <ul className={styles.left}>&nbsp;</ul>
      <div className={styles.nav}>
        <ul className={styles.right}>
          {category.map((big, index) => (
            <ul key={index} className={styles.cate_area}>
              {subCategory[big.title].map((small) => (
                <NavLink
                  key={small.id}
                  to={small.path}
                  state={{ id: small.id }}>
                  <li
                    className={styles.category}
                    onMouseEnter={() => categoryHover(big.id)}
                    onMouseLeave={() => categoryHover(null)}>
                    {small.title}
                  </li>
                </NavLink>
              ))}
            </ul>
          ))}
        </ul>
      </div>
      <ul className={styles.space_search}>&nbsp;</ul>
      <ul className={styles.space_lang}>&nbsp;</ul>
      <EditButton />
    </nav>
  );
}
