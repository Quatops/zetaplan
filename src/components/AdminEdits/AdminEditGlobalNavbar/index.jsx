import AdminEditContainer from 'components/AdminEditContainer';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';
import { BsPlusCircle } from 'react-icons/bs';
import useMenu from 'hooks/useMenu';

export default function AdminEditGlobalNavbar({
  handleEditSubmit,
  subCategory,
  category,
}) {
  const { modifySubMenu, addSubMenu } = useMenu();
  const [menuItem, setMenuItem] = useState(null);
  const [activeAdd, setActiveAdd] = useState(false);

  const handleChange = (e, type) => {
    setMenuItem((prev) => ({ ...prev, [type]: e }));
  };

  const handleonClick = (obj, subCate, cate) => {
    setMenuItem({
      title: obj.title,
      path: obj.path,
      id: obj.id,
      subCate,
      cate,
    });
    setActiveAdd(false);
  };

  const handleAddClick = () => {
    setMenuItem({
      subCate: null,
      cate: 0,
      title: '',
      path: '',
      id: null,
    });
    setActiveAdd(true);
  };
  const handleSelectChange = (e) => {
    setMenuItem((prev) => ({ ...prev, ['cate']: e.target.value }));
  };

  const handleSubmit = () => {
    if (activeAdd) {
      menuItem.id = subCategory[menuItem.cate].length;

      console.log('찍어봄', subCategory[menuItem.cate]);
      addSubMenu.mutate(menuItem, {
        onSuccess: () => {
          alert('성공적으로 추가되었습니다.');
        },
        onError: (e) => {
          alert(`에러가 발생했습니다. ${e}`);
        },
      });
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
          {subCategory.slice(0, 6).map((big, cate) => (
            <div className={styles.edit_cate} key={cate}>
              {big.map((small, subCate) => (
                <div
                  key={subCate}
                  className={`${styles.subnav_btn} flex_center`}
                  onClick={() => handleonClick(small, subCate, cate)}>
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
                readOnly={!activeAdd}
                onChange={(e) => handleChange(e.target.value, 'path')}
              />
              {activeAdd && (
                <>
                  <label>&nbsp;&nbsp; 카테고리 : &nbsp;&nbsp; </label>
                  <select onChange={handleSelectChange}>
                    {category.map((value) => (
                      <option
                        value={value.id}
                        key={value.id}
                        className={styles.option}>
                        {value.title}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            {!activeAdd && (
              <div className={styles.plus_icon} onClick={handleAddClick}>
                <span>추가하기</span> &nbsp;&nbsp;
                <BsPlusCircle />
              </div>
            )}
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
