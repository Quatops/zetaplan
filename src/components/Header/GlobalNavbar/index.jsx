import React from "react";
import styles from "./styles.module.css";
import { category, subCategory } from "../../../constants/category";
import { Link } from "react-router-dom";

export default function GlobalNavigator({ categoryHover }) {
  return (
    <div className={styles.nav_wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.left}>&nbsp;</ul>
        <ul className={styles.right}>
          {category.map((big, index) => (
            <ul key={index} className={styles.cate_area}>
              {subCategory[big.title].map((small, index) => (
                <Link key={index} to={small.path}>
                  <li
                    className={styles.category}
                    onMouseEnter={() => categoryHover(big.id)}
                    onMouseLeave={() => categoryHover(null)}
                  >
                    {small.title}
                  </li>
                </Link>
              ))}
            </ul>
          ))}
          <ul className={styles.space_search}>&nbsp;</ul>
          <ul className={styles.space_lang}>&nbsp;</ul>
        </ul>
      </nav>
    </div>
  );
}
