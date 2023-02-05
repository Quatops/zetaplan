import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { FaAngleRight } from 'react-icons/fa';

export default function SubNavbar({ navItems, navTitle, updateActiveNavId }) {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_title}>{navTitle}</div>
      <ul className={styles.nav}>
        {navItems &&
          navItems.map((value, index) => {
            if (value.title.length > 0) {
              return (
                <>
                  <NavLink
                    key={index}
                    className="subnav_nav_items"
                    onClick={() => updateActiveNavId(value.id)}
                    to={value.path}>
                    <p>{value.title}</p>
                    <p className="subnav_rightbtn">
                      <FaAngleRight />
                    </p>
                  </NavLink>
                  {value.sub &&
                    value.sub.map((sub, i) => (
                      <>
                        <NavLink
                          key={i}
                          className="subnav_nav_items subnav_small"
                          onClick={() => updateActiveNavId(value.id)}
                          to={`${sub.path}`}>
                          <p>{sub.title}</p>
                          <p className="subnav_rightbtn">
                            <FaAngleRight />
                          </p>
                        </NavLink>
                      </>
                    ))}
                </>
              );
            } else {
              return <></>;
            }
          })}
      </ul>
    </div>
  );
}
