import { useState, useEffect } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Loader } from 'components/Loader';

export const ImageGallery = ({ nameImage }) => {
  const [imageName, setImageName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [largeImage, setLargeImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = img => {
    setIsModalOpen(true);
    setLargeImage(img);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImage('');
  };

  const KEY = '25755107-c5ecbaee54c3d5c87c2809c98';
  const host = 'https://pixabay.com/api/';

  useEffect(() => {
    if (!nameImage) {
      return;
    }
    setLoading(true);
    setImageName(null);
    setTimeout(() => {
      fetch(
        `${host}?q=${nameImage}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=20`
      )
        .then(response => response.json())
        .then(image => setImageName(image))
        .catch(error => setError(error))
        .finally(setLoading(false));
    }, 2000);
  }, [nameImage]);

  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      {error && <h1>Hold On!</h1>}
      {loading && <Loader />}

      <List>
        {imageName?.hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            openModal={() => openModal(largeImageURL)}
          />
        ))}
      </List>
      {imageName && <Button />}
      {largeImage && (
        <Modal largeImageURL={largeImage} closeModal={closeModal} />
      )}
    </div>
  );
};
