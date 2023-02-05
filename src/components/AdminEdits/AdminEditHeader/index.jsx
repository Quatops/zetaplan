import React, { useState } from 'react';
import styles from '../styles.module.css';
import Button from 'components/SubmitButton';
import AdminEditContainer from 'components/AdminEditContainer';

export default function AdminEditHeader({ handleEditSubmit, category }) {
  const [menu, setMenu] = useState({
    0: category[0].title,
    1: category[1].title,
    2: category[2].title,
    3: category[3].title,
    4: category[4].title,
    5: category[5].title,
  });
  const handleChange = (e, id) => {
    setMenu((prev) => ({ ...prev, [id]: e }));
  };
  return (
    <AdminEditContainer
      modalSize={{ height: '200px' }}
      title="메인 메뉴 수정"
      position={{ bottom: 0 }}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleEditSubmit(menu);
        }}>
        <div className={styles.edit_wrap}>
          {category.slice(0, 6).map((value) => (
            <input
              key={value.id}
              type="text"
              className={styles.edit_items}
              name="menu"
              value={menu[value.id]}
              onChange={(e) => handleChange(e.target.value, value.id)}
            />
          ))}
        </div>
        <Button widthSize="100%">변경하기</Button>
      </form>
    </AdminEditContainer>
  );
}
