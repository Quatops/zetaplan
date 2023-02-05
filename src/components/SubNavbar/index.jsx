import React, { useEffect, useState } from 'react';
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
                    className="subnav_nav_items"
                    onClick={() => {
                      updateActiveNavId(value.id);
                    }}
                    to={value.path}>
                    <p>{value.title}</p>
                    <p className="subnav_rightbtn">
                      <FaAngleRight />
                    </p>
                  </NavLink>
                  {value.sub && (
                    <div className={styles.subnav_sub}>
                      {value.sub.map((sub, i) => (
                        <>
                          <NavLink
                            key={i}
                            className="subnav_nav_items subnav_small"
                            onClick={() => updateActiveNavId(sub.id)}
                            to={sub.path}>
                            <p>{sub.title}</p>
                            <p className="subnav_rightbtn">
                              <FaAngleRight />
                            </p>
                          </NavLink>

                          {sub.sub && (
                            <div className={styles.subnav_sub_sub}>
                              {sub.sub.map((s, si) => (
                                <NavLink
                                  key={si}
                                  className="subnav_nav_items subnav_small_sub"
                                  onClick={() => updateActiveNavId(s.id)}
                                  to={s.path}>
                                  <p>{s.title}</p>
                                  <p className="subnav_rightbtn">
                                    <FaAngleRight />
                                  </p>
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  )}
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
