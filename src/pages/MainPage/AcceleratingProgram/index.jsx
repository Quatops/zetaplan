import React, { useState } from 'react';
import AcceleratingTab from './AcceleratingTab';
import styles from './styles.module.css';
import Program from './Program';
import Differentiation from './Differentiation';
import Portfolio from './Portfolio';
import { useAccelerating } from 'hooks/useItems';

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
  const { AccelePortQuery, AcceleDifferentQuery } = useAccelerating();
  const {
    AccelePortQuery: { data: logo_images },
  } = useAccelerating();
  const {
    AcceleDifferentQuery: { data: differentiations },
  } = useAccelerating();
  const {
    AcceleProgramQuery: { data: programs },
  } = useAccelerating();

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
        <div className={`${styles.wrap} flex_center`}>
          {activeTab === 0 && programs && <Program programs={programs} />}
          {activeTab === 1 && differentiations && (
            <Differentiation differentiations={differentiations} />
          )}
          {activeTab === 2 && logo_images && (
            <Portfolio logo_images={logo_images} />
          )}
        </div>
      </div>
    </div>
  );
}
