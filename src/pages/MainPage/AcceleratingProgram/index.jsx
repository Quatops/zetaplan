import React, { useState } from 'react';
import AcceleratingTab from './AcceleratingTab';
import styles from './styles.module.css';
import Program from './Program';
import Differentiation from './Differentiation';
import Portfolio from './Portfolio';

const header_items = [
  '액설러레이팅 프로그램',
  '액설러레이팅 차별성',
  '액설러레이팅 포트폴리오',
];
export default function AcceleratingProgram() {
  const [activeTab, setActiveTab] = useState(0);
  const updateActiveTab = (idx) => {
    setActiveTab(idx);
  };
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.accelerating_wrap}>
        <header className={styles.header}>
          <div className={styles.tab_wrap}>
            {header_items.map((value, index) => (
              <AcceleratingTab
                content={value}
                key={index}
                id={index}
                activeTab={index === activeTab}
                updateActiveTab={updateActiveTab}
              />
            ))}
          </div>
        </header>
        {activeTab === 0 && <Program />}
        {activeTab === 1 && <Differentiation />}
        {activeTab === 2 && <Portfolio />}
      </div>
    </div>
  );
}
