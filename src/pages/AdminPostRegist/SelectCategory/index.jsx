import React from 'react';
import styles from './styles.module.css';

export default function SelectCategry({
  options,
  updateSelect,
  cate,
  children,
}) {
  const handleChangeSelect = (e) => {
    updateSelect(e.target.value);
  };
  return (
    <div className={styles.select_wrap}>
      {children}
      <select
        className={styles.select}
        onChange={handleChangeSelect}
        defaultValue={cate}>
        {options.map((value) => (
          <option value={value.id} key={value.id} className={styles.option}>
            {value.title}
          </option>
        ))}
      </select>
    </div>
  );
}
