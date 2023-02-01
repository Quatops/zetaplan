import AdminEditContainer from 'components/AdminEditContainer';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';

export default function AdminEditGlobalNavbar({
  handleEditSubmit,
  subCategory,
}) {
  // const [menu, setMenu] = useState(
  //   Array.from(Array(subCategory.length), (_, i) => {
  //     const obj = new Array(7).fill('');
  //     subCategory[i].map((small, sId) => {
  //       obj[sId] = small.title;
  //     });
  //     return obj;
  //   }),
  // );

  const [menuItem, setMenuItem] = useState();
  const [activeIdx, setActiveIdx] = useState(0);

  const handleChange = (e, bId, sId) => {
    setMenuItem((prev) => {
      prev[bId][sId] = e;
      return [...prev];
    });
    console.log(menuItem);
  };

  const handleonClick = (obj) => {
    console.log(obj);
  };
  return (
    <AdminEditContainer
      modalSize={{ height: '320px', width: '850px' }}
      title="서브 메뉴 수정"
      position={{ bottom: 0 }}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className={styles.edit_wrap}>
          {subCategory.slice(0, 6).map((big, bIdx) => (
            <div className={styles.edit_bigcate} key={bIdx}>
              {big.map((small, sIdx) => (
                <div
                  key={sIdx}
                  className={`${styles.subnav_btn} flex_center`}
                  onClick={() => handleonClick(small)}>
                  {small.title}
                </div>
              ))}
            </div>
          ))}
        </div>
        <input />
        <Button widthSize="100%">변경하기</Button>
      </form>
    </AdminEditContainer>
  );
}
