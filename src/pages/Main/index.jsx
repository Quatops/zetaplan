import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import ScrollMenu from "./ScrollMenu";

export default function Main() {
  const [pageIdx, setPageIdx] = useState(1);
  const mainWrapperRef = useRef();
  const DIVIDER_HEIGHT = 3;

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = mainWrapperRef.current;
      const pageHeight = window.innerHeight; // 화면의 세로 길이. 100vh
      if (deltaY > 0) {
        // 스크롤을 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setPageIdx(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setPageIdx(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 2페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setPageIdx(3);
        } else {
          // 스크롤을 내릴 때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            //현재 1페이지
            mainWrapperRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            setPageIdx(1);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            //현재 2페이지
            mainWrapperRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            setPageIdx(1);
          } else if (
            scrollTop >= pageHeight * 2 &&
            scrollTop < pageHeight * 3
          ) {
            // 현재 3페이지
            mainWrapperRef.current.scrollTo({
              top: pageHeight + DIVIDER_HEIGHT,
              left: 0,
              behavior: "smooth",
            });
            setPageIdx(2);
          }
        }
      }
    };
    const wrapperRefCurrent = mainWrapperRef.current;
    wrapperRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      wrapperRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  });

  return (
    <div className={styles.main_wrapper} ref={mainWrapperRef}>
      <ScrollMenu pageIdx={pageIdx} />
      <div className={styles.main_item}>
        <Page1 />
      </div>
      <div className={styles.main_item}>
        <Page2 />
      </div>
      <div className={styles.main_item}>
        <Page3 />
      </div>
    </div>
  );
}
