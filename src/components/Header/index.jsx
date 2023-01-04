import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";
import GlobalNav from "./GlobalNav";
import { category } from "../../constants/category";

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
        <nav className={`${styles.nav_wrapper} ${activeNav && styles.active}`}>
          <ul>
            <li className={styles.nav_logo}>
              {activeNav ? (
                <img src={require("../../assets/LogoBlack.png")} alt="Logo" />
              ) : (
                <img src={require("../../assets/Logo.png")} alt="Logo" />
              )}
            </li>
          </ul>
          <ul className={styles.nav} onMouseEnter={() => showNavbar(true)}>
            {category.map((value, index) => (
              <li
                key={index}
                className={`${styles.nav_item} ${activeNav && styles.active} ${
                  activeCate === value.id && styles.selected
                }`}
              >
                <p>{value.title}</p>
              </li>
            ))}
            <li className={`${styles.search_wrapper} ${styles.nav_item}`}>
              <input
                className={styles.search}
                placeholder=" #오늘의 #스타트업 "
              />
              <FaSearch className={styles.search_icon} />
            </li>
            <li>
              <select
                name="Language"
                className={`${styles.language_wrapper} ${
                  activeNav && styles.active
                }`}
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
