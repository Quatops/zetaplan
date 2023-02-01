import React, { useState } from 'react';
import styles from './styles.module.css';

import { RxDoubleArrowRight } from 'react-icons/rx';
import AdminEditIntroTab from '../../../../components/AdminEdits/AdminEditIntroTab';

export default function MainArticleTabs({
  intro_tab,
  isAdmin,
  updateActiveTabIdx,
  activeTabIdx,
  handleIntroTabSubmit,
}) {
  const [activeIntroTabEditBtn, setActiveIntroTabEditBtn] = useState(false);
  return (
    <ul
      className={styles.intro_header}
      onMouseEnter={() => setActiveIntroTabEditBtn(true)}
      onMouseLeave={() => setActiveIntroTabEditBtn(false)}>
      {intro_tab.map((item, index) => (
        <li
          key={index}
          className={`${styles.header_item} ${
            activeTabIdx === index && styles.active
          }`}
          onClick={() => updateActiveTabIdx(index)}>
          {item.name}
        </li>
      ))}
      <li className={styles.header_item}>
        <RxDoubleArrowRight />
      </li>
      {isAdmin && activeIntroTabEditBtn && (
        <AdminEditIntroTab
          intro_tab={intro_tab}
          handleEditSubmit={handleIntroTabSubmit}
          position={{ top: '5px', right: '5px' }}
        />
      )}
    </ul>
  );
}
