import AdminEditContainer from 'components/AdminEditContainer';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';

export default function AdminEditGlobalNavbar({
  handleEditSubmit,
  subCategory,
}) {
  const [menu, setMenu] = useState(
    Array.from(Array(subCategory.length), (_, i) => {
      const obj = new Array(7).fill('');
      subCategory[i].map((small, sId) => {
        obj[sId] = small.title;
      });
      return obj;
    }),
  );

  const handleChange = (e, bId, sId) => {
    setMenu((prev) => {
      prev[bId][sId] = e;
      return [...prev];
    });
    console.log(menu);
  };
  return (
    <AdminEditContainer
      modalSize={{ height: '400px' }}
      title="서브 메뉴 수정"
      position={{ bottom: 0 }}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleEditSubmit(menu);
        }}>
        {menu && (
          <div className={styles.edit_wrap}>
            {subCategory.map((big, bIdx) => (
              <div className={styles.edit_bigcate} key={bIdx}>
                {big.map((small, sIdx) => (
                  <input
                    key={small.id}
                    type="text"
                    className={styles.edit_items}
                    name="menu"
                    value={menu[bIdx][sIdx]}
                    onChange={(e) => handleChange(e.target.value, bIdx, sIdx)}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        <Button widthSize="100%">변경하기</Button>
      </form>
    </AdminEditContainer>
  );
}
