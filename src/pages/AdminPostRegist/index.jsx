import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';
import { useLocation } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewPost } from 'api/firebase';
import SelectCategory from './SelectCategory';
import { category, subCategory } from 'constants/category';

export default function AdminPostRegist() {
  const location = useLocation();
  const post = location.state ? location.state.post : null;
  const cate = location.state ? location.state.category : 0;
  const subCate = location.state ? location.state.subCategory : 0;

  console.log(cate + '가 카테고리고, ' + subCate + ' 가 서브카테야.');

  const [images, setImages] = useState();
  const [value, setValue] = useState('');
  const [selectSubCate, setSelectSubCate] = useState(subCate);
  const queryClient = useQueryClient();

  const addPost = useMutation(({ value, info }) => addNewPost(value, info), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const updateImages = (image) => {
    setImages(image);
  };
  const updateValue = (e) => {
    setValue(e);
  };

  const [selectCate, setSelectCate] = useState(cate);
  const updateSelectCate = (select) => {
    setSelectCate(select);
    setSelectSubCate(subCategory[category[select].id][0].id);
  };
  const updateSelectSubCate = (select) => {
    setSelectSubCate(select);
  };

  const handleSubmit = () => {
    if (window.confirm('저장하시겠습니까?')) {
      const info = {
        subCate: Number(selectSubCate),
        cate: Number(selectCate),
        id: Number(selectSubCate),
      };
      addPost.mutate(
        { value, info },
        {
          onSuccess: () => {
            alert('성공적으로 글이 등록되었습니다.');
          },
          onError: (e) => {
            alert(`에러가 발생했습니다. ${e}`);
          },
        },
      );
    }
  };
  return (
    <div className={`${styles.admin_wrap} flex_center`}>
      <header className={styles.header_temp}>
        <div className={styles.logo}>
          <img src={require('assets/LogoBlack.png')} />
        </div>
      </header>
      <section className={styles.text_area} id="text-area">
        <TextEditor
          images={images}
          updateValue={updateValue}
          value={value}
          post={post}
          updateImages={updateImages}
        />
      </section>
      <aside className={styles.content_info}>
        <ul className={styles.cate_selector}>
          <li className={styles.select_wrap}>
            <SelectCategory
              label="카테고리"
              options={category}
              updateSelect={updateSelectCate}
              cate={cate}
            />
          </li>
          <li className={styles.select_wrap}>
            <SelectCategory
              label="상세 카테고리"
              options={subCategory[category[selectCate].id]}
              updateSelect={updateSelectSubCate}
              cate={subCate}
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
