import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";
import GlobalNav from "./GlobalNavbar";
import { category } from "constants/category";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeNav, setActiveNav] = useState(false);
  const showNavbar = (isActive) => {
    setActiveNav(isActive);
  };
  const [activeCate, setActiveCate] = useState(null);

  const categoryHover = (bigCategoryId) => {
    setActiveCate(bigCategoryId);
  };

  return (
    <>
      <header className={styles.header} onMouseLeave={() => showNavbar(false)}>
        <nav
          className={`${styles.nav_wrapper} ${
            activeNav && styles.active
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
          <ul className={styles.nav} onMouseEnter={() => showNavbar(true)}>
            {category.map((value, index) => (
              <Link to={value.path}>
                <li
                  key={index}
                  className={`${styles.nav_item} ${
                    activeNav && styles.active
                  } ${activeCate === value.id && styles.selected}`}
                >
                  <p>{value.title}</p>
                </li>
              </Link>
            ))}
            <li className={`${styles.search_wrapper} ${styles.nav_item}`}>
              <input
                className={styles.search}
                placeholder=" #오늘의 #스타트업 "
              />
              <FaSearch className={styles.search_icon} />
            </li>
            <li className={styles.language_wrapper}>
              <select
                name="Language"
                className={`${styles.languages} ${activeNav && styles.active}`}
              >
                <option defaultValue={true}>Kor</option>
                <option>Eng</option>
                <option>Chi</option>
              </select>
            </li>
          </ul>
          <div className={`${styles.line} ${activeNav && styles.active}`}></div>
        </nav>
        {activeNav && <GlobalNav categoryHover={categoryHover} />}
      </header>
    </>
  );
}
