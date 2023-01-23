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
        {options.map((value) =>
          value.id === cate ? (
            <option
              value={value.id}
              key={value.id}
              className={styles.option}
              selected={true}>
              {value.title}
            </option>
          ) : (
            <option value={value.id} key={value.id} className={styles.option}>
              {value.title}
            </option>
          ),
        )}
      </select>
    </div>
  );
}
