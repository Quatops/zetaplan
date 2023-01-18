import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import SubPageTitle from 'components/SubPageTitle';
import { subCategory } from 'constants/category';
export default function SubContentDetail({ pageName, activeNavId, post }) {
  const contentRef = useRef();
  const { content } = post;
  useEffect(() => {
    console.log(content);
    contentRef.current.innerHTML = content;
  }, []);
  return (
    <div className={styles.content_wrap}>
      <SubPageTitle
        pageName={pageName}
        activeNav={subCategory[pageName].find((e) => e.id === activeNavId)}
      />
      <div className={styles.content} ref={contentRef}></div>
    </div>
  );
}
