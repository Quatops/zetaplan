import React from 'react';
import styles from './styles.module.css';

export default function SubPageHeader({ category, subCateTitle }) {
  return (
    <>
      <div className={styles.route_url}>
        {category
          ? `HOME > ${category} > ${subCateTitle}`
          : ` HOME > ${subCateTitle}`}
      </div>
      <h1 className={styles.sub_title}>{subCateTitle}</h1>
      <div className={styles.line}></div>
    </>
  );
}
