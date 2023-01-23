import PostUICard from 'components/PostUICard';
import React from 'react';
import styles from './styles.module.css';
import Modal from 'components/Modal';
import RadioGroup from 'components/RadioGroup';
import Radio from 'components/RadioGroup/Radio';
import Button from 'components/SubmitButton';

export default function WriteFormList({
  updateIsActiveModal,
  insertComponent,
}) {
  const radio_style = {
    display: 'block',
    width: '500px',
    position: 'relative',
  };
  return (
    <Modal updateIsActiveModal={updateIsActiveModal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          insertComponent(Number(e.target.selectUI.value));
        }}>
        <RadioGroup
          label="레이아웃"
          label_dec="지정된 레이아웃을 선택해보세요.">
          {new Array(3).fill(0).map((_, index) => (
            <Radio name="selectUI" value={index} styles={radio_style}>
              <div className={`${styles.radio_index} flex_center`}>
                {index + 1}
              </div>
              <div className={styles.radio_items}>
                <img src={require(`assets/postUI${index + 1}.png`)} />
              </div>
            </Radio>
          ))}
        </RadioGroup>
        <Button widthSize="100%">제출</Button>
      </form>
    </Modal>
  );
}
