import React from "react";
import styles from "./GlobalNav.module.css";
import { category, subCategory } from "../../constants/category";

export default function GlobalNavigator({ categoryHover }) {
  return (
    <div className={styles.nav_wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.space}></ul>
        {category.map((big, index) => (
          <ul key={index} className={styles.cate_area}>
            {subCategory[big.title].map((small, index) => (
              <li
                key={index}
                className={styles.category}
                onMouseEnter={() => categoryHover(big.id)}
                onMouseLeave={() => categoryHover(null)}
              >
                {small.title}
              </li>
            ))}
          </ul>
        ))}
        <ul className={styles.space}></ul>
        <ul className={styles.space}></ul>
      </nav>
    </div>
  );
}
