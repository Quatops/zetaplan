import React, { useState } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';
import { uploadImage } from 'api/uploader';

export default function AdminPostRegist() {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState();
  const [text, setText] = useState('');
  const updateValue = (e) => {
    setValue(e);
  };
  const updateText = (txt) => {
    setText(txt);
  };
  const updateImages = (image) => {
    setImages((prev) => [...prev, image]);
  };
  const handleSubmit = () => {
    console.log(
      value.substring(value.indexOf('data:image'), value.indexOf('" alt')),
    );

    // const file = value.substring(
    //   value.indexOf('data:image'),
    //   value.indexOf('" alt'),
    // );
  };
  return (
    <div className={`${styles.admin_wrap} flex_center`}>
      <header className={styles.header_temp}>네비</header>
      <div className={styles.text_area} id="text-area">
        <TextEditor
          updateValue={updateValue}
          updateText={updateText}
          value={value}
        />
      </div>
      <button className={styles.submit_btn} onClick={() => handleSubmit()}>
        저장하기
      </button>
    </div>
  );
}
