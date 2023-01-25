import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaEdit } from 'react-icons/fa';
import Modal from 'components/Modal';

export default function EditButton({ children, heightSize }) {
  const [activeModal, setActiveModal] = useState(false);
  const updateActiveModal = (isActive) => {
    setActiveModal(isActive);
  };
  return (
    <>
      <p
        className={`${styles.edit_btn} flex_center`}
        onClick={() => setActiveModal(true)}>
        <FaEdit></FaEdit>
      </p>
      {activeModal && (
        <Modal updateActiveModal={updateActiveModal} heightSize={heightSize}>
          {children}
        </Modal>
      )}
    </>
  );
}
