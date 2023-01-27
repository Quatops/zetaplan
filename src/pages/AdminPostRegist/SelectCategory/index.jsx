import React from 'react';
import styles from './styles.module.css';

export default function SelectCategry({ label, options, updateSelect, cate }) {
  const handleChangeSelect = (e) => {
    updateSelect(e.target.value);
  };
  return (
    <div className={styles.select_wrap}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} onChange={handleChangeSelect}>
        {options.map((value) => (
          <option
            value={cate}
            key={value.id}
            className={styles.option}
            selected={value.id === cate}>
            {value.title}
          </option>
        ))}
      </select>
    </div>
  );
}
