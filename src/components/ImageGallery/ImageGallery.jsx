import { useState } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Modal } from 'components/Modal';

export const ImageGallery = ({ images }) => {
  const [, setIsModalOpen] = useState(false);

  const [largeImage, setLargeImage] = useState('');

  const openModal = img => {
    setIsModalOpen(true);
    setLargeImage(img);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImage('');
  };

  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <List>
        {images?.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            openModal={() => openModal(largeImageURL)}
          />
        ))}
      </List>

      {largeImage && (
        <Modal largeImageURL={largeImage} closeModal={closeModal} />
      )}
    </div>
  );
};
