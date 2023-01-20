import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
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
    console.log('포스트임', category[post.cate]);
  }, [post]);
  return (
    <div className={styles.content_wrap}>
      <div>
        <div
          className={
            styles.route_url
          }>{`HOME > ${category} > ${subCateTitle}`}</div>
        <h1 className={styles.sub_title}>{subCateTitle}</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content} ref={contentRef}></div>
    </div>
  );
}
