import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import { useInverstPortfolio } from 'hooks/useItems';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrow';
import { CiSquarePlus } from 'react-icons/ci';
import { FaTrashAlt } from 'react-icons/fa';
import SubmitButton from 'components/SubmitButton';
import { uploadImage } from 'api/uploader';
import { useAccelerating } from 'hooks/useItems';

// NOTE: embrace power of CSS flexbox!
import './hideScrollbar.css';

export default function InvestmentLogo({
  disableScroll,
  enableScroll,
  isAdmin,
}) {
  const {
    InvestmentLogoQuery: { data: logo_images },
  } = useInverstPortfolio();

  const { modifyInvestmentLogo } = useInverstPortfolio();
  const [logoItems, setLogoItems] = useState(logo_images);
  const logoWrapRef = useRef();
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
  const handleSubmit = () => {};
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
      <>
        {logo_images && (
          <div className={styles.investport_logo_wrap}>
            <header className={styles.logo_header}>
              투자연계 {logo_images.length}건 (총 1,672억)
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
                {new Array(Math.floor(logo_images.length / COUNT))
                  .fill('')
                  .map((_, i) => (
                    <div className={styles.logo_bundle} key={i}>
                      {logo_images
                        .slice(i * COUNT, i * COUNT + COUNT)
                        .map((image, index) => (
                          <div
                            className={`${styles.logo_img} flex_center`}
                            key={index}>
                            <img src={image} alt="투자포트폴리오" />
                          </div>
                        ))}
                    </div>
                  ))}
              </ScrollMenu>
            </div>
            {isAdmin && (
              <>
                {edit ? (
                  <>
                    <button
                      className={styles.plus_btn}
                      onClick={handleClickBtn}>
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
                      onClick={() => handleSubmit()}>
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
      </>
    </div>
  );
}
