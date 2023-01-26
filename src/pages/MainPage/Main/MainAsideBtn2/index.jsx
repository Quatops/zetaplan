import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import styles from './styles.module.css';

export default function MainAsideBtn2() {
  const Button = ({ name, img }) => {
    return (
      <button className={styles.etc_btn}>
        <div className="flex_center">
          <div className={styles.etc_icon}>
            <img src={require(`assets/${img}.png`)} alt="icon" />
          </div>
          {name}
        </div>
        <FaAngleRight />
      </button>
    );
  };

  return (
    <div className={styles.etc_button_wrapper}>
      <Button name="기술사업화" img="technology_commercialization_icon" />
      <Button name="R&BD전략수집" img="cooperation_icon" />
      <Button name="협력네트워크" img="cooperation_network_icon" />
    </div>
  );
}
