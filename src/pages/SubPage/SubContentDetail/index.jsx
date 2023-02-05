import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import './style.css';
import SubPageHeader from 'components/SubPageHeader';
export default function SubContentDetail({
  category,
  subCategory,
  post,
  activeNavId,
}) {
  const contentRef = useRef();
  const subCateTitle = subCategory.find((v) => v.id === activeNavId)?.title;
  useEffect(() => {
    contentRef.current.innerHTML = post.content;
  }, [post]);
  return (
    <div className={styles.content_wrap}>
      <div>
        <SubPageHeader category={category} subCateTitle={subCateTitle} />
      </div>
      <div className={styles.content} ref={contentRef}></div>
    </div>
  );
}
