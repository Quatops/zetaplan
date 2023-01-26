import AdminEditContainer from 'components/AdminEditContainer';
import React, { useState } from 'react';
import Button from 'components/SubmitButton';
import styles from './styles.module.css';
import { FaUpload } from 'react-icons/fa';
import { uploadImage } from 'api/uploader';

export default function AdminEditAsideBtn1({
  position,
  handleAsideBtn1Submit,
  aside_btn1,
}) {
  const [btns, setBtns] = useState([
    { name: aside_btn1[0].name, src: aside_btn1[0].src },
    { name: aside_btn1[1].name, src: aside_btn1[1].src },
    { name: aside_btn1[2].name, src: aside_btn1[2].src },
    { name: aside_btn1[3].name, src: aside_btn1[3].src },
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
          handleAsideBtn1Submit(btns);
        }}>
        <div className={styles.btn_wrap}>
          {btns.map((btn, index) => (
            <section key={index}>
              <div className={styles.icon_area}>
                <div className={styles.icon}>
                  <img src={btn.src} alt="버튼이미지" />
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
              </div>
              <input
                value={btn.name}
                type="text"
                className={styles.edit_items}
                onChange={(e) => handleChangeText(e.target.value, index)}
              />
            </section>
          ))}
        </div>
        <p className={styles.desc}>
          이미지 옆의 업로드버튼을 이용하여 아이콘을 업로드해주세요. 표준 규격은
          51x51입니다.
        </p>
        <Button widthSize="100%">변경하기</Button>
      </form>
    </AdminEditContainer>
  );
}
