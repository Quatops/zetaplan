import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import { CiSquarePlus } from 'react-icons/ci';
import { FaTrashAlt } from 'react-icons/fa';
import SubmitButton from 'components/SubmitButton';
import { uploadImage } from 'api/uploader';

export default function Portfolio({ logo_images, isAdmin }) {
  const [logoItems, setLogoItems] = useState(logo_images);
  const inputRef = useRef();
  const [edit, setEdit] = useState(false);
  const handleChange = (e) => {
    const { files } = e.target;
    if (files) {
      uploadImage(files[0]).then((url) => {
        setLogoItems((prev) => [...prev, url]);
      });
    }
  };
  const handleClickBtn = () => {
    inputRef.current.click();
  };

  const handleSubmit = () => {};
  return (
    <div className={styles.porttab_wrap}>
      <div
        className={styles.logo_wrap}
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${Math.floor(
            Math.sqrt(logo_images.length),
          )}, 1fr)`,
          gridTemplateColumns: `repeat(${Math.floor(
            Math.sqrt(logo_images.length),
          )}, 1fr)`,
        }}>
        {logoItems.map((image, index) => (
          <div
            className={`${styles.logo_img} flex_center`}
            key={index}
            style={{
              width: `100%`,
              maxWidth: '200px',
              maxHeight: '50px',
              height: `100%`,
            }}>
            <img src={image} alt="엑설러레이팅 포트폴리오" />
            {edit && (
              <span
                className={styles.trash}
                onClick={() => {
                  setLogoItems((prev) => prev.filter((_, i) => i !== index));
                }}>
                <FaTrashAlt />
              </span>
            )}
          </div>
        ))}
      </div>
      {isAdmin && (
        <>
          {edit ? (
            <>
              <button className={styles.plus_btn} onClick={handleClickBtn}>
                <CiSquarePlus /> <p>&nbsp;&nbsp;추가하기</p>
                <input
                  type="file"
                  name="logo"
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  ref={inputRef}
                />
              </button>
              <SubmitButton widthSize="400px" onClick={() => handleSubmit()}>
                완료하기
              </SubmitButton>
            </>
          ) : (
            <SubmitButton handleClick={() => setEdit(true)} widthSize="400px">
              수정하기
            </SubmitButton>
          )}
        </>
      )}
    </div>
  );
}
