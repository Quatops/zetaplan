import AdminEditContainer from 'components/AdminEditContainer';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';
import { BsPlusCircle } from 'react-icons/bs';
import useMenu from 'hooks/useMenu';

export default function AdminEditGlobalNavbar({
  handleEditSubmit,
  subCategory,
}) {
  const { modifySubMenu } = useMenu();
  const [menuItem, setMenuItem] = useState(null);
  const [activeAdd, setActiveAdd] = useState(false);

  const handleChange = (e, type) => {
    setMenuItem((prev) => ({ ...prev, [type]: e }));
  };

  const handleonClick = (obj, sId, bId) => {
    setMenuItem({
      title: obj.title,
      path: obj.path,
      id: obj.id,
      sId,
      bId,
    });
    setActiveAdd(false);
  };

  const handleAddClick = () => {
    setMenuItem({ sId: null, bId: null, title: '', path: '', id: null });
    setActiveAdd(true);
  };

  const handleSubmit = () => {
    if (activeAdd) {
    } else {
      modifySubMenu.mutate(menuItem, {
        onSuccess: () => {
          alert('성공적으로 변경되었습니다.');
        },
        onError: (e) => {
          alert(`에러가 발생했습니다. ${e}`);
        },
      });
    }
  };
  return (
    <AdminEditContainer
      modalSize={{ height: '320px', width: '850px' }}
      title={activeAdd ? '서브 메뉴 추가' : '서브 메뉴 수정'}
      position={{ bottom: 0 }}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <div className={styles.edit_wrap}>
          {subCategory.slice(0, 6).map((big, bIdx) => (
            <div className={styles.edit_bigcate} key={bIdx}>
              {big.map((small, sIdx) => (
                <div
                  key={sIdx}
                  className={`${styles.subnav_btn} flex_center`}
                  onClick={() => handleonClick(small, sIdx, bIdx)}>
                  {small.title}
                </div>
              ))}
            </div>
          ))}
        </div>
        {menuItem ? (
          <>
            <div className={styles.input_wrapper}>
              <label>이름&nbsp;&nbsp; </label>
              <input
                type="text"
                id="title"
                value={menuItem.title}
                onChange={(e) => handleChange(e.target.value, 'title')}
              />
              &nbsp;&nbsp;
              <label>url&nbsp;&nbsp; </label>
              <input
                type="text"
                value={menuItem.path}
                onChange={(e) => handleChange(e.target.value, 'path')}
              />{' '}
            </div>
            <div className={styles.plus_icon} onClick={handleAddClick}>
              <span>추가하기</span> &nbsp;&nbsp;
              <BsPlusCircle />
            </div>
          </>
        ) : (
          <div className={styles.plus_icon} onClick={handleAddClick}>
            <span>추가하기</span> &nbsp;&nbsp;
            <BsPlusCircle />
          </div>
        )}

        <Button widthSize="100%">{activeAdd ? '추가하기' : '변경하기'}</Button>
      </form>
    </AdminEditContainer>
  );
}
