import React from 'react';
import styles from './styles.module.css';
import SubPageTitle from 'components/SubPageTitle';
import { subCategory } from 'constants/category';
export default function SubContentDetail({ pageName, activeNavId }) {
  return (
    <div className={styles.content_wrap}>
      <SubPageTitle
        pageName={pageName}
        activeNav={subCategory[pageName].find((e) => e.id === activeNavId)}
      />
    </div>
  );
}
