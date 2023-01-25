import EditButton from 'components/EditButton';
import React from 'react';
import styles from './styles.module.css';

export default function AdminEditContainer({ buttonHeight, title, children }) {
  return (
    <>
      <EditButton heightSize={buttonHeight}>
        <div className={styles.modal_wrap}>
          <div className={styles.modal_title}>{title}</div>
          {children}
        </div>
      </EditButton>
    </>
  );
}
