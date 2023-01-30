import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from 'components/Modal';
import RadioGroup from 'components/RadioGroup';
import Radio from 'components/RadioGroup/Radio';
import Button from 'components/SubmitButton';

export default function WriteFormList({
  updateIsActiveModal,
  insertComponent,
}) {
  const [validNum, setValidNum] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const radio_style = {
    display: 'block',
    width: '500px',
    position: 'relative',
  };
  const handleChange = (e, isRow) => {
    if (e.target.value < 1) {
      setValidNum(true);
    } else {
      setValidNum(false);
    }
    isRow && setRow(e.target.value);
    !isRow && setCol(e.target.value);
  };
  const handleChecked = (id) => {
    console.log(typeof id);
    setActiveIdx(Number(id));
  };
  return (
    <Modal
      updateActiveModal={updateIsActiveModal}
      modalSize={{ width: '700px', height: '700px' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          insertComponent(
            Number(e.target.selectUI.value),
            activeIdx === 1 && row,
            activeIdx === 1 && col,
          );
          updateIsActiveModal(false);
        }}
        className={styles.form_wrap}>
        <RadioGroup
          label="레이아웃"
          label_dec="지정된 레이아웃을 선택해보세요.">
          {new Array(3).fill(0).map((_, index) => (
            <div key={index}>
              <Radio
                name="selectUI"
                value={index}
                styles={radio_style}
                handleChecked={handleChecked}>
                <div className={`${styles.post_ui}`}>
                  <img src={require(`assets/postUI${index + 1}.png`)} />
                </div>
                <div className={`${styles.radio_index} flex_center`}>
                  {index + 1}
                </div>
              </Radio>
              {index === 1 && activeIdx === 1 && (
                <div className={styles.count_wrap}>
                  <label htmlFor="count" min="0" max="20">
                    행 :&nbsp;{' '}
                  </label>
                  <input
                    id="row"
                    type="number"
                    value={row}
                    className={styles.count}
                    onChange={(e) => handleChange(e, true)}
                  />
                  <label htmlFor="row" min="0" max="20">
                    열 :&nbsp;
                  </label>
                  <input
                    id="col"
                    type="number"
                    value={col}
                    className={styles.count}
                    onChange={(e) => handleChange(e, false)}
                  />
                  {validNum && <p>1이상 입력해야합니다!</p>}
                </div>
              )}
            </div>
          ))}
        </RadioGroup>
        <Button widthSize="100%">추가하기</Button>
      </form>
    </Modal>
  );
}
