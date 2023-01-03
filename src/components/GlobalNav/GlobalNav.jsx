import React from "react";
import styles from "./GlobalNav.module.css";
import { category, subCategory } from "../../constants/category";

export default function GlobalNavigator() {
  return (
    <div className={styles.nav_wrapper}>
      <nav className={styles.nav}>
        <ul></ul>
        {category.map((big, index) => (
          <ul key={index} className={styles.cate_area}>
            {subCategory[big.title].map((small, index) => (
              <li key={index} className={styles.category}>
                {small.title}
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </div>
  );
}
