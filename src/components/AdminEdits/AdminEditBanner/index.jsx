import AdminEditContainer from 'components/AdminEditContainer';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';
import { FaTrashAlt } from 'react-icons/fa';
import { uploadImage } from 'api/uploader';

export default function AdminEditBanner({
  baseImages,
  position,
  handleBannerSubmit,
}) {
  const [images, setImages] = useState(baseImages);

  const handleChange = (e) => {
    const { files } = e.target;
    if (files.length > 10) {
      alert('배너이미지는 10개까지만 가능합니다.');
      files = files.slice(0, 10);
    }
    for (let i = 0; i < files.length; ++i) {
      uploadImage(files[i]).then((url) => {
        setImages((prev) => [...prev, url]);
      });
    }
  };
  const handleDeleteImage = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      setImages(images.filter((_, index) => index !== id));
    }
  };
  return (
    <AdminEditContainer
      buttonHeight="400px"
      title="배너이미지 수정"
      position={position}>
      <div className={styles.images_wrap}>
        {images.map((images, index) => (
          <div className={styles.image} key={index}>
            <img src={images} alt="배너이미지" />
            <p
              className={styles.delete_icon}
              onClick={() => handleDeleteImage(index)}>
              <FaTrashAlt />
            </p>
          </div>
        ))}
      </div>
      <form
        autoComplete="off"
        className={styles.form_wrap}
        onSubmit={(e) => {
          e.preventDefault();
          handleBannerSubmit(images);
        }}>
        <input
          type="file"
          accept="image/*"
          multiple
          name="file"
          onChange={handleChange}
        />

        <Button widthSize="100%">변경하기</Button>
      </form>
    </AdminEditContainer>
  );
}
