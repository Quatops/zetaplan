import SubNavbar from "components/SubNavbar";
import React from "react";
import { subCategory } from "constants/category";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import SubPageContent from "components/SubPageContent";

export default function SubPage({ pageName }) {
  return (
    <div className={styles.subPage_wrap}>
      <div className={styles.page_title}>
        <p>{pageName}</p>
      </div>
      <div className={styles.page_content}>
        <SubNavbar navItems={subCategory[pageName]} navTitle={pageName} />
        <SubPageContent />
        <Outlet />
      </div>
    </div>
  );
}
