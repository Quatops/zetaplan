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
        {navItems.map((value, index) => (
          <>
            <Link
              key={index}
              className={`${styles.nav_item} ${
                activeNavId === index && styles.active
              }`}
              onClick={() => updateActiveNavId(index)}
              to={value.path}
            >
              <p>{value.title}</p>
              {activeNavId === index ? <FaAngleRight /> : <></>}
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}
