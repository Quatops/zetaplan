import React, { useEffect, useRef, useState } from 'react';
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
  const [subTitle, setSubTitle] = useState('');
  useEffect(() => {
    contentRef.current.innerHTML = post.content;
  }, [post]);
  useEffect(() => {
    subCategory.forEach((one) => {
      if (one.id === activeNavId) {
        console.log('오나ㅒ?');
        setSubTitle(one.title);
        return;
      } else {
        one.sub &&
          one.sub.forEach((two) => {
            if (two.id === activeNavId) {
              setSubTitle(two.title);
              return;
            } else {
              two.sub &&
                two.sub.forEach((three) => {
                  if (three.id === activeNavId) {
                    setSubTitle(three.title);
                    return;
                  }
                });
            }
          });
      }
    });
  }, [activeNavId]);
  return (
    <div className={styles.content_wrap}>
      <div>
        <SubPageHeader category={category} subCateTitle={subTitle} />
      </div>
      <div className={styles.content} ref={contentRef}></div>
    </div>
  );
}
