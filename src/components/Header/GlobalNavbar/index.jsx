import React, { useState } from 'react';
import styles from './styles.module.css';
import { category, subCategory } from '../../../constants/category';
import { NavLink } from 'react-router-dom';
import EditButton from 'components/EditButton';
import { useAuthContext } from 'context/AuthContext';

export default function GlobalNavigator({ categoryHover }) {
  const { isAdmin } = useAuthContext();
  const [activeEdit, setActiveEdit] = useState(0);
  const updateActiveEdit = (idx) => {
    setActiveEdit(idx);
  };

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
        {isAdmin && (
          <EditButton
            activeEdit={activeEdit}
            updateActiveEdit={updateActiveEdit}
            idx={1}
          />
        )}
      </div>
      <ul className={styles.space_search}>&nbsp;</ul>
      <ul className={styles.space_lang}>&nbsp;</ul>
    </nav>
  );
}
