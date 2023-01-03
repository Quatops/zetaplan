import React from "react";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const navItems = [
    { title: "회사소개", path: "" },
    { title: "투자 IR", path: "" },
    { title: "M&A", path: "" },
    { title: "IPO", path: "" },
    { title: "해외진출", path: "" },
    { title: "기술거래", path: "" },
  ];
  return (
    <header className={styles.header}>
      <ul>
        <li className={styles.nav_logo}>
          <img src={require("../../assets/Logo.png")} alt="Logo" />
        </li>
      </ul>
      <ul className={styles.nav}>
        {navItems.map((value, index) => (
          <li key={index} className={styles.nav_item}>
            {value.title}
          </li>
        ))}
        <li className={`${styles.search_wrapper} ${styles.nav_item}`}>
          <input className={styles.search} placeholder=" #오늘의 #스타트업 " />
          <FaSearch className={styles.search_icon} />
        </li>
        <li>
          <select name="Language" className={styles.language_wrapper}>
            <option selected className={styles.language}>
              Kor
            </option>
            <option className={styles.language}>Eng</option>
            <option className={styles.language}>Chi</option>
          </select>
        </li>
      </ul>
    </header>
  );
}
