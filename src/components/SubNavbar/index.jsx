import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaAngleRight } from "react-icons/fa";

export default function SubNavbar({ navItems, navTitle }) {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_title}>{navTitle}</div>
      <ul className={styles.nav}>
        {navItems.map((value, index) => (
          <>
            <Link
              key={index}
              className={`${styles.nav_item} ${
                activeNav === index && styles.active
              }`}
              onClick={() => setActiveNav(index)}
              to={value.path}
            >
              <p>{value.title}</p>
              {activeNav === index ? <FaAngleRight /> : <></>}
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}
