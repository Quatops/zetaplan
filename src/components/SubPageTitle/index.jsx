import React from "react";
import styles from "./styles.module.css";

export default function SubPageTitle({ pageName, activeNav }) {
  return (
    <>
      {activeNav && (
        <div>
          <div
            className={styles.route_url}
          >{`HOME > ${pageName} > ${activeNav.title}`}</div>
          <h1 className={styles.sub_title}>{activeNav.title}</h1>
          <div className={styles.line}></div>
        </div>
      )}
    </>
  );
}
