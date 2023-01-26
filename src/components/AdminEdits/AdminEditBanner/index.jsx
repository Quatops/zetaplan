import AdminEditContainer from 'components/AdminEditContainer';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'components/SubmitButton';
import { FaTrashAlt } from 'react-icons/fa';

export default function AdminEditBanner({
  handleEditSubmit,
  baseImages,
  position,
}) {
  const [images, setImages] = useState(baseImages);

  const handleChange = (e) => {
    const { files } = e.target;
    const nowImageURLList = [...images];
    for (let i = 0; i < files.length; ++i) {
      const nowImageUrl = URL.createObjectURL(files[i]);
      nowImageURLList.push(nowImageUrl);
    }
    if (nowImageURLList.length > 10) {
      nowImageURLList = nowImageURLList.slice(0, 10);
    }
    setImages(nowImageURLList);
  };
  const handleDeleteImage = (id) => {
    setImages(images.filter((_, index) => index !== id));
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
          handleEditSubmit(e);
        }}>
        <input
          type="file"
          accept="image/*"
          multiple
          name="file"
          onChange={handleChange}
        />

        <Button widthSize="100%" handleSubmit={handleEditSubmit}>
          변경하기
        </Button>
      </form>
    </AdminEditContainer>
  );
}
