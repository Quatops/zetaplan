import EditButton from 'components/EditButton';
import React from 'react';
import styles from './styles.module.css';

export default function AdminEditContainer({
  modalSize,
  title,
  children,
  position,
}) {
  return (
    <>
      <EditButton modalSize={modalSize} position={position}>
        <div className={styles.modal_wrap}>
          <div className={styles.modal_title}>{title}</div>
          {children}
        </div>
      </EditButton>
    </>
  );
}
