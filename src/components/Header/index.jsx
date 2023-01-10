import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";
import GlobalNav from "./GlobalNavbar";
import { category, subCategory } from "constants/category";
import { Link } from "react-router-dom";

export default function Header({ activeNav, updateActiveNav }) {
  const [activeCate, setActiveCate] = useState(null);
  const [showCate, setShowCate] = useState(false);

  const categoryHover = (bigCategoryId) => {
    setShowCate(true);
    setActiveCate(bigCategoryId);
  };
  const updateActiveCate = (isActive) => {
    updateActiveNav(isActive);
    setShowCate(isActive);
  };

  return (
    <>
      <header
        className={styles.header}
        onMouseLeave={() => updateActiveCate(false)}
      >
        <nav
          className={`${styles.nav_wrapper} ${
            activeNav && styles.active_sub
          } flex_between`}
        >
          <ul>
            <Link to="/">
              <li className={styles.nav_logo}>
                {activeNav ? (
                  <img src={require("assets/LogoBlack.png")} alt="Logo" />
                ) : (
                  <img src={require("assets/Logo.png")} alt="Logo" />
                )}
              </li>
            </Link>
          </ul>
          <ul
            className={styles.nav}
            onMouseEnter={() => updateActiveCate(true)}
          >
            {category.map((value) => (
              <Link
                to={value.path}
                state={{ id: subCategory[value.title][0].id }}
                key={value.id}
              >
                <li
                  className={`${styles.nav_item} ${
                    activeNav && styles.active_sub
                  } ${activeCate === value.id && styles.selected}`}
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
              activeNav && styles.active_sub
            }`}
          >
            <p className={styles.language}>KR</p>
            <span className={styles.boundary}>|</span>
            <p className={styles.language}>EN</p>
            <span className={styles.boundary}>|</span>
            <p className={styles.language}>CN</p>
          </li>
          <div
            className={`${styles.line} ${activeNav && styles.active_sub}`}
          ></div>
        </nav>
        {showCate && <GlobalNav categoryHover={categoryHover} />}
      </header>
    </>
  );
}
