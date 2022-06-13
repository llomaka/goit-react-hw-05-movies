import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ posterPath, altCaption, closeModal }) {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    };
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        closeModal();
      };
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [closeModal]);

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img
          src={posterPath}
          alt={altCaption}
        />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  posterPath: PropTypes.string.isRequired,
  altCaption: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
