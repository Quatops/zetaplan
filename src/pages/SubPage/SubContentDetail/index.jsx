import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
export default function SubContentDetail({ post }) {
  const contentRef = useRef();
  useEffect(() => {
    contentRef.current.innerHTML = post.content;
  }, [post]);
  return (
    <div className={styles.content_wrap}>
      <div>
        <div
          className={
            styles.route_url
          }>{`HOME > ${post.cate} > ${post.subCate}`}</div>
        <h1 className={styles.sub_title}>{post.subCate}</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content} ref={contentRef}></div>
    </div>
  );
}
