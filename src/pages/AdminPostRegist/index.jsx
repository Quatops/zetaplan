import React, { useState } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';
import { uploadImage } from 'api/uploader';
import { addNewPost } from 'api/firebase';

export default function AdminPostRegist() {
  const [images, setImages] = useState();
  const [value, setValue] = useState();
  const updateValue = (e) => {
    console.log('찍어볼게요', value);
    setValue(e);
  };
  const updateImages = (image) => {
    console.log('이미지', image);
    setImages(image);
  };
  const handleSubmit = () => {
    addNewPost(value);
  };
  return (
    <div className={`${styles.admin_wrap} flex_center`}>
      <header className={styles.header_temp}>네비</header>
      <div className={styles.text_area} id="text-area">
        <TextEditor
          images={images}
          updateValue={updateValue}
          value={value}
          updateImages={updateImages}
        />
      </div>
      <button className={styles.submit_btn} onClick={() => handleSubmit()}>
        저장하기
      </button>
    </div>
  );
}
