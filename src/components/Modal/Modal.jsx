import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ largeImageURL, closeModal }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow>
        <img src={largeImageURL} alt="bigImage" width="900" />
      </ModalWindow>
    </Overlay>
  );
};
