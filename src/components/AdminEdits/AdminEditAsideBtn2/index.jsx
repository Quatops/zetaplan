import React, { useState } from 'react';
import AdminEditContainer from 'components/AdminEditContainer';
import Button from 'components/SubmitButton';
import styles from './styles.module.css';
import { FaUpload } from 'react-icons/fa';
import { uploadImage } from 'api/uploader';

export default function AdminEditAsideBtn2({
  handleAsideBtn2Submit,
  position,
  aside_btn2,
}) {
  const [btns, setBtns] = useState([
    { name: aside_btn2[0].name, src: aside_btn2[0].src },
    { name: aside_btn2[1].name, src: aside_btn2[1].src },
    { name: aside_btn2[2].name, src: aside_btn2[2].src },
    { name: aside_btn2[3].name, src: aside_btn2[3].src },
  ]);

  const handleChangeText = (e, id) => {
    setBtns((prev) => {
      prev[id]['name'] = e;
      return [...prev];
    });
  };
  const handleChangeImage = (e, id) => {
    const { files } = e.target;
    if (files) {
      uploadImage(files[0]).then((url) => {
        setBtns((prev) => {
          prev[id]['src'] = url;
          return [...prev];
        });
      });
    }
  };

  return (
    <AdminEditContainer
      modalSize={{ height: '400px' }}
      title="버튼 수정"
      position={position}>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleAsideBtn2Submit(btns);
        }}>
        <div className={styles.btn_wrap}>
          {btns.map((btn, index) => (
            <section key={index}>
              <div className={styles.icon}>
                <img src={btn.src} alt="탭2" />
              </div>
              <label htmlFor={index} className={styles.upload_icon}>
                <FaUpload />
              </label>
              <input
                type="file"
                accept="image/*"
                name="file"
                id={index}
                className={styles.img_input}
                onChange={(e) => handleChangeImage(e, index)}
              />
              <input
                className={styles.text}
                value={btn.name}
                onChange={(e) => handleChangeText(e.target.value, index)}
              />
            </section>
          ))}
        </div>
        <p className={styles.desc}>
          이미지 옆의 업로드버튼을 이용하여 아이콘을 업로드해주세요. 표준 규격은
          40x40입니다.
        </p>
        <Button widthSize="100%">변경하기</Button>
      </form>
    </AdminEditContainer>
  );
}
