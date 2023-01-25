import AdminEditContainer from 'components/AdminEditContainer';
import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';

export default function AdminEditGlobalNavbar({
  menu,
  handleEditSubmit,
  handleChange,
  subCategory,
  updateMenu,
}) {
  useEffect(() => {
    const obj = Array.from(Array(6), () => Array(6).fill(''));
    subCategory.map((big, bId) => {
      big.map((small, sId) => {
        obj[bId][sId] = small.title;
      });
    });
    updateMenu(obj);
  }, []);
  return (
    <AdminEditContainer
      buttonHeight="400px"
      title="서브 메뉴 수정"
      position={{ bottom: 0 }}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleEditSubmit(e);
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
        <Button widthSize="100%" handleSubmit={handleEditSubmit}>
          변경하기
        </Button>
      </form>
    </AdminEditContainer>
  );
}
