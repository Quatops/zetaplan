import React, { useState } from 'react';
import styles from './styles.module.css';

import { FiPlus } from 'react-icons/fi';
import AdminEditIntroTab from '../../../../components/AdminEdits/AdminEditIntroTab';

export default function MainArticleTabs({
  intro_tab,
  isAdmin,
  updateActiveTabIdx,
  activeTabIdx,
}) {
  const [activeIntroTabEditBtn, setActiveIntroTabEditBtn] = useState(false);

  const handleChange = (e) => {};
  const handleEditSubmit = () => {};
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
        <FiPlus />
      </li>
      {isAdmin && activeIntroTabEditBtn && (
        <AdminEditIntroTab
          handleChange={handleChange}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </ul>
  );
}
