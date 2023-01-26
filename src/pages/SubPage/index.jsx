import SubNavbar from 'components/SubNavbar';
import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getPost, deletePost } from 'api/firebase';
import { useCategoryContext } from 'context/CategoryContext';

import styles from './styles.module.css';
import SubContentDetail from './SubContentDetail';

export default function SubPage({ pageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, subCategory } = useCategoryContext();
  const { isAdmin } = useAuthContext();
  const updateisWhite = useOutletContext();
  const [activeNavId, setActiveNavId] = useState(
    location.state ? location.state.id : 0,
  );
  const queryClient = useQueryClient();
  const removePost = useMutation((id) => deletePost(id), {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });
  const updateActiveNavId = (idx) => {
    setActiveNavId(idx);
  };

  const [post, setPost] = useState(null);

  useEffect(() => {
    updateisWhite(false);
  }, []);
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
    if (window.confirm('삭제하시겠습니까?')) {
      removePost.mutate(idx, {
        onSuccess: () => {
          alert('성공적으로 삭제되었습니다.');
        },
        onError: (e) => {
          alert(`에러가 발생했습니다. ${e}`);
        },
      });
    }
  };

  return (
    <>
      {category && subCategory && (
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
      )}
    </>
  );
}
