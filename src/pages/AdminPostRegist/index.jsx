import React, { useState } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';
import { useLocation } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewPost, updatePost } from 'api/firebase';
import SelectCategory from './SelectCategory';
import { useCategoryContext } from 'context/CategoryContext';

export default function AdminPostRegist({}) {
  const location = useLocation();
  const { category, subCategory } = useCategoryContext();
  const isNew = location.state ? location.state.isNew : null;
  const post = location.state ? location.state.post : null;
  const cate = location.state ? location.state.category : 0;
  const subCate = location.state ? location.state.subCategory : 0;
  const purpose = isNew ? '저장' : '수정';

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [selectSubCate, setSelectSubCate] = useState(subCate);
  const queryClient = useQueryClient();

  const addPost = useMutation(({ value, info }) => addNewPost(value, info), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const modifyPost = useMutation(({ value, info }) => updatePost(value, info), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
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

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (window.confirm(`${purpose}하시겠습니까?`)) {
      const info = {
        subCate: Number(selectSubCate),
        cate: Number(selectCate),
        id: Number(selectSubCate),
      };
      if (isNew) {
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
      } else {
        modifyPost.mutate(
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
    }
  };
  return (
    <div className={`${styles.admin_wrap} flex_center`}>
      <header className={styles.header_temp}>
        <div className={styles.logo}>
          <img src={require('assets/LogoBlack.png')} />
        </div>
      </header>
      <section className={`${styles.title_area} flex_center`}>
        <label htmlFor="title" className={styles.label}>
          제목
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."
        />
      </section>
      <section className={styles.text_area} id="text-area">
        <TextEditor
          updateValue={updateValue}
          post={post}
          selectSubCate={selectCate}
        />
      </section>
      <aside className={styles.content_info}>
        <ul className={styles.cate_selector}>
          <li className={styles.select_wrap}>
            {category && (
              <SelectCategory
                label="카테고리"
                options={category}
                updateSelect={updateSelectCate}
                cate={cate}
              />
            )}
          </li>
          <li className={styles.select_wrap}>
            {subCategory && (
              <SelectCategory
                label="상세 카테고리"
                options={subCategory[category[selectCate].id]}
                updateSelect={updateSelectSubCate}
                cate={subCate}
              />
            )}
          </li>
        </ul>
        <button className={styles.submit_btn} onClick={() => handleSubmit()}>
          {purpose}하기
        </button>
      </aside>
    </div>
  );
}
