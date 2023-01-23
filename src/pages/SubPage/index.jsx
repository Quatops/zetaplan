import SubNavbar from 'components/SubNavbar';
import React, { useState, useEffect } from 'react';
import { category, subCategory } from 'constants/category';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import SubContentDetail from './SubContentDetail';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getPost, deletePost } from 'api/firebase';

export default function SubPage({ pageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin } = useAuthContext();
  const [activeNavId, setActiveNavId] = useState(
    location.state ? location.state.id : 0,
  );
  const queryClient = useQueryClient();
  const removePost = useMutation((id) => deletePost(id), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const updateActiveNavId = (idx) => {
    setActiveNavId(idx);
    console.log(
      '서브카테고리',
      subCategory[pageName].find((v) => v.id === idx),
    );
  };

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (location.state) updateActiveNavId(location.state.id);
  }, [location.state]);
  //const { data: post } = useQuery([`post`], () => getPost(activeNavId));
  useEffect(() => {
    getPost(activeNavId).then((data) => {
      setPost(data);
    });
  }, [activeNavId]);

  const handleRemove = (idx) => {
    removePost.mutate(idx, {
      onSuccess: () => {
        alert('성공적으로 삭제되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
  };

  return (
    <div className={styles.subPage_wrap}>
      <section className={styles.page_title}>
        <p>{category[pageName].title}</p>
      </section>
      <section className={styles.page_content}>
        <SubNavbar
          navItems={subCategory[pageName]}
          navTitle={category[pageName].title}
          activeNavId={activeNavId}
          updateActiveNavId={updateActiveNavId}
        />
        {post && post.id >= 0 ? (
          <>
            <SubContentDetail
              subCategory={subCategory[pageName]}
              category={category[post.cate].title}
              activeNavId={activeNavId}
              post={post}
            />
            {isAdmin && (
              <article className={styles.btn_wrap}>
                <button
                  className={`${styles.write_btn} ${styles.btn}`}
                  onClick={() => {
                    navigate('/admin/write', {
                      state: {
                        post,
                        category: pageName,
                        subCategory: activeNavId,
                        isNew: false,
                      },
                    });
                  }}>
                  수정
                </button>
                <button
                  className={`${styles.delete_btn} ${styles.btn}`}
                  onClick={() => handleRemove(activeNavId)}>
                  삭제
                </button>
              </article>
            )}
          </>
        ) : (
          <div>
            <p>페이지를 찾을 수 없습니다.</p>
            {isAdmin && (
              <article className={styles.btn_wrap}>
                <button
                  className={styles.write_btn}
                  onClick={() => {
                    navigate('/admin/write', {
                      state: {
                        post: null,
                        category: pageName,
                        subCategory: activeNavId,
                        isNew: true,
                      },
                    });
                  }}>
                  글쓰기
                </button>
              </article>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
