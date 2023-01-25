import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaSearch } from 'react-icons/fa';
import GlobalNav from './GlobalNavbar';
import { Link } from 'react-router-dom';

import { useAuthContext } from 'context/AuthContext';
import useMenu from 'hooks/useMenu';

import AdminHeader from './AdminHeader';
import AdminEditHeader from './AdminEditHeader';
import { useCategoryContext } from 'context/CategoryContext';

/*
showCate : 카테고리를 보여줄것인지에 대한 변수. 
activeCateIdx : header nav-item중 활성화된 카테고리의 idx
isWhite : header 테마가 white인지 default인지에 대한 변수.
*/
export default function Header({ isWhite }) {
  const [activeCateIdx, setActiveCateIdx] = useState(null);
  const [showCate, setShowCate] = useState(false);
  const [activeEditBtn, setActiveEditBtn] = useState(false);
  const { isAdmin, user_logout } = useAuthContext();
  const [menu, setMenu] = useState({});

  const { category, subCategory } = useCategoryContext();
  const { modifyMainMenu } = useMenu();

  const categoryHover = (bigCategoryId) => {
    setShowCate(true);
    setActiveCateIdx(bigCategoryId);
  };
  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) user_logout();
  };

  const handleEditSubmit = () => {
    category.map((v) => {
      v.title = menu[v.id];
    });
    modifyMainMenu.mutate(category, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };
  const handleChange = (e, id) => {
    setMenu((prev) => ({ ...prev, [id]: e }));
  };

  const updateMenu = (obj) => {
    setMenu(obj);
  };

  return (
    <>
      <header
        className={styles.header}
        onMouseLeave={() => {
          setShowCate(false);
          setActiveEditBtn(false);
        }}>
        {isAdmin && <AdminHeader handleLogout={handleLogout} />}
        <nav
          className={`${styles.nav_wrapper} ${
            (isWhite || showCate) && styles.active_sub
          } flex_between`}>
          <ul>
            <li className={styles.nav_logo}>
              <Link to="/">
                {isWhite || showCate ? (
                  <img src={require('assets/LogoBlack.png')} alt="Logo" />
                ) : (
                  <img src={require('assets/Logo.png')} alt="Logo" />
                )}
              </Link>
            </li>
          </ul>
          {!category && !subCategory && <ul className={styles.space_nav}></ul>}
          {category && subCategory && (
            <ul
              className={styles.nav}
              onMouseEnter={() => {
                setShowCate(true);
                setActiveEditBtn(true);
              }}>
              {category.map((value) => (
                <Link
                  to={value.path}
                  state={{ id: subCategory[value.id][0].id }}
                  key={value.id}>
                  <li
                    className={`${styles.nav_item} ${
                      (isWhite || showCate) && styles.active_sub
                    } ${activeCateIdx === value.id && styles.selected}`}>
                    <p>{value.title}</p>
                  </li>
                </Link>
              ))}
              {category && activeEditBtn && (
                <AdminEditHeader
                  handleChange={handleChange}
                  handleEditSubmit={handleEditSubmit}
                  category={category}
                  menu={menu}
                  updateMenu={updateMenu}
                />
              )}
            </ul>
          )}

          <li className={`${styles.search_wrapper} ${styles.nav_item}`}>
            <input
              className={styles.search}
              placeholder=" #오늘의 #스타트업 "
            />
            <FaSearch className={styles.search_icon} />
          </li>
          <li
            className={`${styles.language_wrapper} ${
              (isWhite || showCate) && styles.active_sub
            }`}>
            <p className={styles.language}>KR</p>
            <span className={styles.boundary}>|</span>
            <p className={styles.language}>EN</p>
            <span className={styles.boundary}>|</span>
            <p className={styles.language}>CN</p>
          </li>
          <div
            className={`${styles.line} ${
              (isWhite || showCate) && styles.active_sub
            }`}></div>
        </nav>
        {showCate && (
          <GlobalNav
            categoryHover={categoryHover}
            category={category}
            subCategory={subCategory}
          />
        )}
      </header>
    </>
  );
}
