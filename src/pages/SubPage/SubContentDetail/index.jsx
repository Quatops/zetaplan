import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
export default function SubContentDetail({ post, subCategory, category }) {
  const contentRef = useRef();
  useEffect(() => {
    contentRef.current.innerHTML = post.content;
  }, [post]);
  return (
    <div className={styles.content_wrap}>
      <div>
        <div className={styles.route_url}>{`HOME > ${
          category[post.cate].title
        } > ${subCategory[post.subCate].title}`}</div>
        <h1 className={styles.sub_title}>{subCategory[post.subCate].title}</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content} ref={contentRef}></div>
    </div>
  );
}
