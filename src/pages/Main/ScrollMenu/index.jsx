import styles from "./styles.module.css";
import React from "react";

const Menu = ({ num, pageIdx, pageName }) => {
  return (
    <div className={`${styles.scroll} ${pageIdx === num && styles.active}`}>
      <div className={`${styles.name} ${pageIdx === num && styles.line}`}>
        {pageName}
      </div>
    </div>
  );
};

const ScrollMenu = ({ pageIdx }) => {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu_list}>
        <Menu num={1} scrollIdx={pageIdx} pageName="MAIN"></Menu>
        <Menu num={2} scrollIdx={pageIdx} pageName="DOMESTIC"></Menu>
        <Menu num={3} scrollIdx={pageIdx} pageName="GLOBAL"></Menu>
      </div>
    </div>
  );
};

export default ScrollMenu;
