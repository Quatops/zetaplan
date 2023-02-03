import styles from './styles.module.css';
import React from 'react';

const Menu = ({
  num,
  pageIdx,
  pageName,
  isActive,
  updatePage,
  hidden,
  isBigScreen,
}) => {
  return (
    <div
      className={`${styles.scroll} ${isActive && styles.active}`}
      style={{ display: hidden ? 'none' : 'visible' }}
      onClick={() =>
        updatePage(num, window.innerHeight * (num - 1), 0, 'smooth')
      }>
      {isBigScreen ? (
        <div
          className={`${styles.name} ${
            pageIdx >= 2 ? styles.black : styles.white
          }`}>
          {pageName}
          {pageIdx === num && <div className={styles.line}></div>}
        </div>
      ) : (
        <div
          className={`${styles.dot} ${
            pageIdx >= 2 ? styles.black : styles.white
          }`}></div>
      )}
    </div>
  );
};
const scrollMenu = [
  'MAIN',
  '액셀러레이팅',
  '투자 포트폴리오',
  '',
  '글로벌 네트워크',
];

const ScrollMenu = ({ pageIdx, updatePage, isBigScreen }) => {
  return (
    <div className={styles.menu_wrapper}>
      <div className={`${styles.menu_list} ${isBigScreen && styles.menu_dot}`}>
        {scrollMenu.map((title, index) => (
          <Menu
            key={index}
            num={index + 1}
            pageIdx={pageIdx}
            isBigScreen={isBigScreen}
            pageName={title}
            isActive={
              pageIdx === index + 1 || (index + 1 === 3 && pageIdx === 4)
            }
            updatePage={updatePage}
            hidden={index === 3}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollMenu;
