import styles from "./styles.module.css";
import React from "react";

const Menu = ({ num, pageIdx, pageName }) => {
  return (
    <div className={`${styles.scroll} ${pageIdx === num && styles.active}`}>
      <div className={styles.name}>
        {pageName}
        {pageIdx === num && <div className={styles.line}></div>}
      </div>
    </div>
  );
};

const ScrollMenu = ({ pageIdx }) => {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu_list}>
        <Menu num={1} pageIdx={pageIdx} pageName="MAIN"></Menu>
        <Menu num={2} pageIdx={pageIdx} pageName="DOMESTIC"></Menu>
        <Menu num={3} pageIdx={pageIdx} pageName="GLOBAL"></Menu>
      </div>
    </div>
  );
};

export default ScrollMenu;
