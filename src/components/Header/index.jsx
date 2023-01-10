import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";
import GlobalNav from "./GlobalNavbar";
import { category, subCategory } from "constants/category";
import { Link } from "react-router-dom";

/*
showCate : 카테고리를 보여줄것인지에 대한 변수. 
activeCateIdx : header nav-item중 활성화된 카테고리의 idx
isWhite : header 테마가 white인지 default인지에 대한 변수.
*/
export default function Header({ isWhite }) {
  const [activeCateIdx, setActiveCateIdx] = useState(null);
  const [showCate, setShowCate] = useState(false);

  const categoryHover = (bigCategoryId) => {
    setShowCate(true);
    setActiveCateIdx(bigCategoryId);
  };
  const updateShowCate = (isActive) => {
    setShowCate(isActive);
  };

  return (
    <>
      <header
        className={styles.header}
        onMouseLeave={() => updateShowCate(false)}
      >
        <nav
          className={`${styles.nav_wrapper} ${
            (isWhite || showCate) && styles.active_sub
          } flex_between`}
        >
          <ul>
            <Link to="/">
              <li className={styles.nav_logo}>
                {isWhite || showCate ? (
                  <img src={require("assets/LogoBlack.png")} alt="Logo" />
                ) : (
                  <img src={require("assets/Logo.png")} alt="Logo" />
                )}
              </li>
            </Link>
          </ul>
          <ul className={styles.nav} onMouseEnter={() => updateShowCate(true)}>
            {category.map((value) => (
              <Link
                to={value.path}
                state={{ id: subCategory[value.title][0].id }}
                key={value.id}
              >
                <li
                  className={`${styles.nav_item} ${
                    (isWhite || showCate) && styles.active_sub
                  } ${activeCateIdx === value.id && styles.selected}`}
                >
                  <p>{value.title}</p>
                </li>
              </Link>
            ))}
          </ul>
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
            }`}
          >
            <p className={styles.language}>KR</p>
            <span className={styles.boundary}>|</span>
            <p className={styles.language}>EN</p>
            <span className={styles.boundary}>|</span>
            <p className={styles.language}>CN</p>
          </li>
          <div
            className={`${styles.line} ${
              (isWhite || showCate) && styles.active_sub
            }`}
          ></div>
        </nav>
        {showCate && <GlobalNav categoryHover={categoryHover} />}
      </header>
    </>
  );
}
