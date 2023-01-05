import SubNavbar from "components/SubNavbar";
import React, { useState } from "react";
import { subCategory } from "constants/category";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import SubPageContent from "components/SubPageContent";

export default function SubPage({ pageName }) {
  const [activeNavId, setActiveNavId] = useState(0);
  const updateActiveNavId = (idx) => {
    setActiveNavId(idx);
  };
  return (
    <div className={styles.subPage_wrap}>
      <div className={styles.page_title}>
        <p>{pageName}</p>
      </div>
      <div className={styles.page_content}>
        <SubNavbar
          navItems={subCategory[pageName]}
          navTitle={pageName}
          activeNavId={activeNavId}
          updateActiveNavId={updateActiveNavId}
        />
        <SubPageContent
          pageName={pageName}
          activeNav={subCategory[pageName][activeNavId]}
        />
        <Outlet />
      </div>
    </div>
  );
}
