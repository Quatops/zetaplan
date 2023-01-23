import React from 'react';
import { v4 as uuid } from 'uuid';
import styles from '../styles.module.css';

export default function Radio({
  children,
  value,
  name,
  defaultChecked,
  disabled,
}) {
  const id = uuid();
  return (
    <label
      htmlFor={id}
      style={{ position: 'relative' }}
      className={styles.radio_label}>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
}
