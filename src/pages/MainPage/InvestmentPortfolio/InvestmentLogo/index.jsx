import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrow';
import { CiSquarePlus } from 'react-icons/ci';
import { FaTrashAlt } from 'react-icons/fa';
import SubmitButton from 'components/SubmitButton';
import { uploadImage } from 'api/uploader';

// NOTE: embrace power of CSS flexbox!
import './hideScrollbar.css';
import { useAuthContext } from 'context/AuthContext';

export default function InvestmentLogo({
  disableScroll,
  enableScroll,
  logoImages,
  modifyInvestmentLogo,
}) {
  const { isAdmin } = useAuthContext();

  const [logoItems, setLogoItems] = useState(logoImages);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();
  const handleClickBtn = () => {
    inputRef.current.click();
  };
  const handleChange = (e) => {
    const { files } = e.target;
    if (files) {
      uploadImage(files[0]).then((url) => {
        setLogoItems((prev) => [...prev, url]);
      });
    }
  };
  const handleSubmit = () => {
    modifyInvestmentLogo.mutate(logoItems, {
      onSuccess: () => {
        alert('성공적으로 변경되었습니다.');
      },
      onError: (e) => {
        alert(`에러가 발생했습니다. ${e}`);
      },
    });
    setEdit(false);
  };
  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  // 세로 줄 갯수
  const COUNT = 5;
  return (
    <div className={styles.page_wrapper}>
      {logoItems && (
        <div className={styles.investport_logo_wrap}>
          <header className={styles.logo_header}>
            <p className={styles.count}>투자연계 {logoImages.length}건</p>
            <p>총 1,672억</p>
          </header>
          <div
            className={styles.logo_wrap}
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}>
            <ScrollMenu
              wheel={true} // wheel 이 false 면 작동하지 않습니다
              onWheel={onWheel}
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}>
              {new Array(Math.floor(logoItems.length / COUNT) + 1)
                .fill('')
                .map((_, i) => (
                  <div className={styles.logo_bundle} key={i}>
                    {logoItems
                      .slice(i * COUNT, i * COUNT + COUNT)
                      .map((image, index) => (
                        <div
                          className={`${styles.logo_img} flex_center`}
                          key={index}>
                          <img src={image} alt="invest" />
                          {edit && (
                            <span
                              className={styles.trash}
                              onClick={() => {
                                setLogoItems((prev) =>
                                  prev.filter(
                                    (_, id) => id !== COUNT * i + index,
                                  ),
                                );
                              }}>
                              <FaTrashAlt />
                            </span>
                          )}
                        </div>
                      ))}
                  </div> /* logo_budle */
                ))}
              {/* logo_map  */}
            </ScrollMenu>
          </div>
          {isAdmin && (
            <>
              {edit ? (
                <>
                  <button className={styles.plus_btn} onClick={handleClickBtn}>
                    <CiSquarePlus /> <p>&nbsp;&nbsp;추가하기</p>
                    <input
                      type="file"
                      name="logo"
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      ref={inputRef}
                    />
                  </button>
                  <SubmitButton
                    widthSize="400px"
                    handleClick={() => handleSubmit()}>
                    완료하기
                  </SubmitButton>
                </>
              ) : (
                <SubmitButton
                  handleClick={() => setEdit(true)}
                  widthSize="400px">
                  수정하기
                </SubmitButton>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
