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
  const pageHeight = window.innerHeight;
  const updatePage = (idx, isLast) => {
    let v = isLast ? idx : idx - 1;
    mainWrapperRef.current.scrollTo({
      top: pageHeight * v + DIVIDER_HEIGHT * v,
      left: 0,
      behavior: "smooth",
    });
    setPageIdx(idx);
  };
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = mainWrapperRef.current;
      if (deltaY > 0) {
        // 스크롤을 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          updatePage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          updatePage(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 2페이지
          updatePage(3, true);
        }
      } else {
        // 스크롤을 내릴 때
        if (
          (scrollTop >= 0 && scrollTop < pageHeight) ||
          (scrollTop >= pageHeight && scrollTop < pageHeight * 2)
        ) {
          //현재 1페이지이거나 2페이지
          mainWrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setPageIdx(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          mainWrapperRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setPageIdx(2);
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
      <div className={styles.chatbot}>
        <img src={require("assets/chat_icon.png")} alt="chat_icon" />
      </div>
      <div className={styles.bottom_line}></div>
      <ScrollMenu pageIdx={pageIdx} updatePage={updatePage} />
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
