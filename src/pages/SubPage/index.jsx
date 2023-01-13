import SubNavbar from 'components/SubNavbar';
import React, { useState, useEffect } from 'react';
import { subCategory } from 'constants/category';
import styles from './styles.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import SubPageTitle from 'components/SubPageTitle';

export default function SubPage({ pageName }) {
  const location = useLocation();
  const [activeNavId, setActiveNavId] = useState(
    location.state ? location.state.id : 0,
  );
  const updateActiveNavId = (idx) => {
    setActiveNavId((prev) => (prev = idx));
  };
  useEffect(() => {
    if (location.state) updateActiveNavId(location.state.id);
  }, [location.state]);
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
        <SubPageTitle
          pageName={pageName}
          activeNav={subCategory[pageName].find((e) => e.id === activeNavId)}
        />
        <Outlet />
      </div>
    </div>
  );
}
