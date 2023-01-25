import EditButton from 'components/EditButton';
import React from 'react';
import styles from './styles.module.css';

export default function AdminEditContainer({
  buttonHeight,
  title,
  children,
  position,
}) {
  return (
    <>
      <EditButton heightSize={buttonHeight} position={position}>
        <div className={styles.modal_wrap}>
          <div className={styles.modal_title}>{title}</div>
          {children}
        </div>
      </EditButton>
    </>
  );
}
