import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ largeImageURL, closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      <ModalWindow>
        <img src={largeImageURL} alt="" />
      </ModalWindow>
    </Overlay>
  );
};
