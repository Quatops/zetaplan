import React from 'react';
import styles from './styles.module.css';

export default function AcceleratingTab({
  content,
  activeTab,
  id,
  updateActiveTab,
}) {
  return (
    <button
      onClick={() => updateActiveTab(id)}
      className={`${styles.accelerating_btn} ${activeTab && styles.active}`}>
      {content}
    </button>
  );
}
