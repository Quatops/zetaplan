import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import TextEditor from 'components/TextEditor';
import { useLocation } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewPost } from 'api/firebase';
import SelectCategory from './SelectCategory';
import { category, subCategory } from 'constants/category';
import WriteFormList from './WriteFormList';
import ToggleUI from 'components/PostUICard/ToggleUI';

export default function AdminPostRegist() {
  const [images, setImages] = useState();
  const [value, setValue] = useState('');
  const [selectSubCate, setSelectSubCate] = useState(0);
  const queryClient = useQueryClient();
  const [adduiIdx, setAdduiIdx] = useState(null);

  const addComponent = (idx) => {
    console.log(idx + '번 컴포넌트 추가할라구~ 그러니까 추가해줄럐?');
    // value만 적용하면 메인에서만 와! 추가됐나보다! 할텐데,
    // 아냐. 내가 이걸 적용시키려면... 텍스트 에디터에 추가가 되어야하잖아.
    setAdduiIdx(idx);
  };

  const location = useLocation();
  const post = location.state ? location.state.post : null;
  const addPost = useMutation(({ value, info }) => addNewPost(value, info), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const updateImages = (image) => {
    setImages(image);
  };
  const updateValue = (e) => {
    setValue(e);
  };

  const [selectCate, setSelectCate] = useState(0);
  const updateSelectCate = (select) => {
    setSelectCate(select);
  };
  const updateSelectSubCate = (select) => {
    setSelectSubCate(select);
  };

  const handleSubmit = () => {
    if (window.confirm('저장하시겠습니까?')) {
      const info = {
        cate: selectCate,
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
          adduiIdx={adduiIdx}
          updateImages={updateImages}
        />
      </section>
      <aside className={styles.content_info}>
        <WriteFormList addComponent={addComponent} />
        <ul className={styles.cate_selector}>
          <li className={styles.select_wrap}>
            <SelectCategory
              label="카테고리"
              options={category}
              updateSelect={updateSelectCate}
            />
          </li>
          <li className={styles.select_wrap}>
            <SelectCategory
              label="상세 카테고리"
              options={subCategory[category[selectCate].title]}
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
