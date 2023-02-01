import React, { useState } from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import AdminEditGlobalNavbar from '../../AdminEdits/AdminEditGlobalNavbar';
import useMenu from 'hooks/useMenu';

export default function GlobalNavigator({
  categoryHover,
  category,
  subCategory,
}) {
  const { modifySubMenu } = useMenu();
  const { isAdmin } = useAuthContext();

  const handleEditSubmit = (menu) => {
    subCategory.map((big, bId) => {
      big.map((small, sId) => {
        subCategory[bId][sId].title = menu[bId][sId];
      });
    });
    modifySubMenu.mutate(subCategory, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };

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
              handleEditSubmit={handleEditSubmit}
              subCategory={subCategory}></AdminEditGlobalNavbar>
          )}
        </ul>
      </div>
      <ul className={styles.space_search}>&nbsp;</ul>
      <ul className={styles.space_lang}>&nbsp;</ul>
    </nav>
  );
}
