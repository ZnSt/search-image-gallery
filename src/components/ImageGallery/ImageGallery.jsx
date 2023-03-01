import { useState, useEffect } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';

export const ImageGallery = ({ nameImage }) => {
  const [imageName, setImageName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const KEY = '25755107-c5ecbaee54c3d5c87c2809c98';
  const host = 'https://pixabay.com/api/';

  useEffect(() => {
    if (!nameImage) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      fetch(
        `${host}?q=${nameImage}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => setImageName(image))
        .catch(error => setError(error))
        .finally(setLoading(false));
    }, 3000);
  }, [nameImage]);

  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      {error && <h1>Hold On!</h1>}
      {loading && <div>Загружаем...</div>}

      <List>
        {imageName?.hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </List>
      {imageName && <Button />}
    </div>
  );
};
