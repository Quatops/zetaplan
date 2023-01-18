import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewPost } from 'api/firebase';
import SelectCategry from './SelectCategory';
import { category, subCategory } from 'constants/category';

export default function AdminPostRegist() {
  const [images, setImages] = useState();
  const [value, setValue] = useState('');
  const [selectSubCate, setSelectSubCate] = useState({});
  const queryClient = useQueryClient();
  const addPost = useMutation(({ value, info }) => addNewPost(value, info), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const updateImages = (image) => {
    setImages(image);
  };
  const updateValue = (e) => {
    console.log('찍어볼게요', value);
    setValue(e);
  };

  const [selectCate, setSelectCate] = useState('회사소개');
  const updateSelectCate = (select) => {
    setSelectCate(select);
  };
  const updateSelectSubCate = (select) => {
    console.log('selected sub 바꿀거다');
    setSelectSubCate(select);
  };

  const handleSubmit = () => {
    const id = subCategory[selectCate].find(
      (v) => v.title === selectSubCate,
    ).id;
    if (window.confirm('저장하시겠습니까?')) {
      const info = {
        cate: selectCate,
        subCate: selectSubCate,
        id,
      };
      addPost.mutate(
        { value, info },
        {
          onSuccess: () => {
            alert('성공적으로 글이 등록되었습니다.');
          },
        },
      );
    }
  };
  return (
    <div className={`${styles.admin_wrap} flex_center`}>
      <header className={styles.header_temp}>네비</header>
      <section className={styles.text_area} id="text-area">
        <TextEditor
          images={images}
          updateValue={updateValue}
          value={value}
          updateImages={updateImages}
        />
      </section>
      <aside className={styles.content_info}>
        <ul className={styles.cate_selector}>
          <li className={styles.select_wrap}>
            <SelectCategry
              label="카테고리"
              options={category}
              updateSelect={updateSelectCate}
            />
          </li>
          <li className={styles.select_wrap}>
            <SelectCategry
              label="상세 카테고리"
              options={subCategory[selectCate]}
              updateSelect={updateSelectSubCate}
            />
          </li>
        </ul>
        <button className={styles.submit_btn} onClick={() => handleSubmit()}>
          저장하기
        </button>
      </aside>
    </div>
  );
}
