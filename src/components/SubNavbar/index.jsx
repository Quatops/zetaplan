import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaAngleRight } from "react-icons/fa";

export default function SubNavbar({
  navItems,
  navTitle,
  updateActiveNavId,
  activeNavId,
}) {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_title}>{navTitle}</div>
      <ul className={styles.nav}>
        {navItems.map((value) => (
          <Link
            key={value.id}
            className={`${styles.nav_item} ${
              activeNavId === value.id && styles.active
            }`}
            onClick={() => updateActiveNavId(value.id)}
            to={value.path}
          >
            <p>{value.title}</p>
            {activeNavId === value.id ? <FaAngleRight /> : <></>}
          </Link>
        ))}
      </ul>
    </div>
  );
}
