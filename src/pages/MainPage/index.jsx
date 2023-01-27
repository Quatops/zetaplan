import React, { useEffect, useState, useRef, Suspense } from 'react';
import styles from './styles.module.css';
import { useOutletContext } from 'react-router-dom';

import Main from './Main';
import AcceleratingProgram from './AcceleratingProgram';
import ScrollMenu from './ScrollMenu';
import Footer from 'components/Footer';

const GlobalNetwork = React.lazy(() => import('./GlobalNetwork'));
const InvestmentPortfolio = React.lazy(() => import('./InvestmentPortfolio'));

export default function MainPage() {
  const [pageIdx, setPageIdx] = useState(1);
  const updateisWhite = useOutletContext();
  const mainWrapperRef = useRef();
  const updatePage = (idx, top, left, behavior) => {
    mainWrapperRef.current.scrollTo({
      top,
      left,
      behavior,
    });
    setPageIdx(idx);
    idx === 4 || idx === 3 ? updateisWhite(true) : updateisWhite(false);
  };
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = mainWrapperRef.current;
      const { scrollBottom } = mainWrapperRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        // 스크롤을 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          updatePage(2, pageHeight, 0, 'smooth');
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          updatePage(3, pageHeight * 2, 0, 'smooth');
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          updatePage(4, pageHeight * 3, 0, 'smooth');
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          updatePage(5, pageHeight * 4, 0, 'smooth');
        }
      } else {
        // 스크롤 올릴때
        if (
          (scrollTop >= 0 && scrollTop < pageHeight) ||
          (scrollTop >= pageHeight && scrollTop < pageHeight * 2)
        ) {
          //현재 1페이지이거나 2페이지
          updatePage(1, 0, 0, 'smooth');
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          updatePage(2, pageHeight, 0, 'smooth');
        } else if (
          scrollTop >= pageHeight * 3 &&
          scrollTop < pageHeight * 3 + 500
        ) {
          updatePage(3, pageHeight * 2, 0, 'smooth');
        } else {
          updatePage(4, pageHeight * 3, 0, 'smooth');
        }
      }
    };
    const wrapperRefCurrent = mainWrapperRef.current;
    wrapperRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      wrapperRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  });
  return (
    <div className={styles.main_wrapper} ref={mainWrapperRef}>
      <ScrollMenu pageIdx={pageIdx} updatePage={updatePage} />

      <section className={styles.main_item}>
        <Main />
      </section>
      <section className={styles.main_item}>
        <AcceleratingProgram />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={styles.main_item}>
          <InvestmentPortfolio />
        </section>
        <section className={styles.main_item}>
          <GlobalNetwork />
        </section>
        <Footer />
      </Suspense>
    </div>
  );
}
