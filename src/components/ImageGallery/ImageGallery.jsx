import { useState, useEffect } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Loader } from 'components/Loader';

export const ImageGallery = ({ images }) => {
  // const [images, setImages] = useState([]);
  const [, setIsModalOpen] = useState(false);
  // const [page, setPage] = useState(1);

  const [largeImage, setLargeImage] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const openModal = img => {
    setIsModalOpen(true);
    setLargeImage(img);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImage('');
  };

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  // const KEY = '25755107-c5ecbaee54c3d5c87c2809c98';
  // const host = 'https://pixabay.com/api/';

  // useEffect(() => {
  //   if (!nameImage) {
  //     return;
  //   }
  //   setLoading(true);

  //   fetch(
  //     `${host}?q=${nameImage}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=20`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setImages(prev => [...prev, ...data.hits]);
  //     })
  //     .catch(error => setError(error))
  //     .finally(setLoading(false));
  // }, [nameImage, page]);

  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      {/* {error && <h1>Hold On!</h1>}
      {loading && <Loader />} */}

      <List>
        {images?.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            openModal={() => openModal(largeImageURL)}
          />
        ))}
      </List>
      {/* {images && <Button loadMore={loadMore} />} */}
      {largeImage && (
        <Modal largeImageURL={largeImage} closeModal={closeModal} />
      )}
    </div>
  );
};
