import styles from "./styles.module.css";
import React from "react";

const Menu = ({ num, pageIdx, pageName, updatePage, isLast }) => {
  return (
    <div
      className={`${styles.scroll} ${pageIdx === num && styles.active}`}
      onClick={() => updatePage(num, isLast)}
    >
      <div className={styles.name}>
        {pageName}
        {pageIdx === num && <div className={styles.line}></div>}
      </div>
    </div>
  );
};

const ScrollMenu = ({ pageIdx, updatePage }) => {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu_list}>
        <Menu
          num={1}
          pageIdx={pageIdx}
          pageName="MAIN"
          updatePage={updatePage}
        ></Menu>
        <Menu
          num={2}
          pageIdx={pageIdx}
          updatePage={updatePage}
          pageName="DOMESTIC"
        ></Menu>
        <Menu
          num={3}
          updatePage={updatePage}
          pageIdx={pageIdx}
          isLast={true}
          pageName="GLOBAL"
        ></Menu>
      </div>
    </div>
  );
};

export default ScrollMenu;
