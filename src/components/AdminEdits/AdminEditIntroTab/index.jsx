import AdminEditContainer from 'components/AdminEditContainer';
import React, { useState } from 'react';
import Button from 'components/SubmitButton';
import styles from '../styles.module.css';

export default function AdminEditIntroTab({
  position,
  handleEditSubmit,
  intro_tab,
}) {
  const [tabs, setTabs] = useState({
    0: intro_tab[0].name,
    1: intro_tab[1].name,
    2: intro_tab[2].name,
    3: intro_tab[3].name,
    4: intro_tab[4].name,
  });
  const handleChange = (e, id) => {
    setTabs((prev) => ({ ...prev, [id]: e }));
  };
  return (
    <AdminEditContainer
      modalSize={{ height: '200px' }}
      title="탭 수정"
      position={position}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleEditSubmit(tabs);
        }}>
        <div className={styles.edit_wrap}>
          {intro_tab.map((value, index) => (
            <input
              key={index}
              type="text"
              className={styles.edit_items}
              name="menu"
              value={tabs[index]}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>
        <Button widthSize="100%" handleSubmit={handleEditSubmit}>
          변경하기
        </Button>
      </form>
    </AdminEditContainer>
  );
}
