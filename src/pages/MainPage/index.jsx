import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import { useOutletContext } from "react-router-dom";

import Main from "./Main";
import AcceleratingProgram from "./AcceleratingProgram";
import InvestmentPortfolio from "./InvestmentPortfolio";
import ScrollMenu from "./ScrollMenu";
import GlobalNetwork from "./GlobalNetwork";
import InvestmentInquiry from "pages/InvestmentInquiry";

export default function MainPage() {
  const [pageIdx, setPageIdx] = useState(1);
  const updateActiveNav = useOutletContext();
  const mainWrapperRef = useRef();
  const updatePage = (idx, top, left, behavior) => {
    mainWrapperRef.current.scrollTo({
      top,
      left,
      behavior,
    });
    setPageIdx(idx);
    if (idx === 2) {
      updateActiveNav(false);
    }

    idx === 4 ? updateActiveNav(true) : updateActiveNav(false);
  };

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = mainWrapperRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        // 스크롤을 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          updatePage(2, pageHeight, 0, "smooth");
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          updatePage(3, pageHeight * 2, 0, "smooth");
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          updatePage(4, pageHeight * 3, 0, "smooth");
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          updatePage(5, pageHeight * 4, 0, "smooth");
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          // 현재 5페이지
          updatePage(5, pageHeight * 5, 0, "smooth");
        }
      } else {
        // 스크롤을 내릴 때
        if (
          (scrollTop >= 0 && scrollTop < pageHeight) ||
          (scrollTop >= pageHeight && scrollTop < pageHeight * 2)
        ) {
          //현재 1페이지이거나 2페이지
          updatePage(1, 0, 0, "smooth");
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          updatePage(2, pageHeight, 0, "smooth");
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          updatePage(3, pageHeight * 2, 0, "smooth");
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          updatePage(4, pageHeight * 3, 0, "smooth");
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
      <ScrollMenu pageIdx={pageIdx} updatePage={updatePage} />
      <div className={styles.main_item}>
        <Main />
      </div>
      <div className={styles.main_item}>
        <AcceleratingProgram />
      </div>
      <div className={styles.main_item}>
        <InvestmentPortfolio />
      </div>
      <div className={styles.main_item}>
        <GlobalNetwork />
      </div>
      <div className={styles.main_item}>
        <InvestmentInquiry />
      </div>
    </div>
  );
}
