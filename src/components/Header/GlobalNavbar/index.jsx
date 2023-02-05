import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import AdminEditGlobalNavbar from '../../AdminEdits/AdminEditGlobalNavbar';

export default function GlobalNavigator({
  categoryHover,
  category,
  subCategory,
}) {
  const { isAdmin } = useAuthContext();

  return (
    <nav className={styles.nav_wrapper}>
      <ul className={styles.left}>&nbsp;</ul>
      <div className={styles.nav}>
        <ul className={styles.right}>
          {category.slice(0, 6).map((big, index) => (
            <ul key={index} className={styles.cate_area}>
              {subCategory[big.id].map((small) => (
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
          {isAdmin && subCategory && (
            <AdminEditGlobalNavbar
              subCategory={subCategory}
              category={category}></AdminEditGlobalNavbar>
          )}
        </ul>
      </div>
      <ul className={styles.space_search}>&nbsp;</ul>
      <ul className={styles.space_lang}>&nbsp;</ul>
    </nav>
  );
}
