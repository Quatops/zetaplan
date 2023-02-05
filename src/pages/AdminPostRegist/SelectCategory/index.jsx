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
        {options.map((value, index) => {
          return (
            <>
              <option value={value.id} key={value.id} className={styles.option}>
                {value.title}
              </option>

              {value.sub &&
                value.sub.map((v, i) => {
                  return (
                    <>
                      <option
                        value={v.id}
                        key={v.id}
                        className={styles.sub_option}>
                        -{v.title}
                      </option>
                      {v.sub &&
                        v.sub.map((s, i) => {
                          return (
                            <>
                              <option
                                value={s.id}
                                key={s.id}
                                className={styles.sub_option}>
                                &nbsp; &nbsp;--{s.title}
                              </option>
                            </>
                          );
                        })}
                    </>
                  );
                })}
            </>
          );
        })}
      </select>
    </div>
  );
}
