import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { BtnUp } from './BtnUp';

const KEY = '25755107-c5ecbaee54c3d5c87c2809c98';
const host = 'https://pixabay.com/api/';

export const App = () => {
  const [userSearch, setUserSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [setError] = useState(null);
  const [backToUp, setBackToUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setBackToUp(true);
      } else {
        setBackToUp(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!userSearch) {
      return;
    }
    setLoading(true);

    fetch(
      `${host}?q=${userSearch}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=20`
    )
      .then(response => response.json())
      .then(data => {
        setImages(prev => [...prev, ...data.hits]);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, [userSearch, page]);

  const handleFormSubmit = value => {
    setUserSearch(value);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {backToUp && <BtnUp scrollUp={scrollUp} />}
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      <ToastContainer autoClose={4000} />
      {loading && <Loader />}
      {images.length > 0 && <Button loadMore={loadMore} />}
    </div>
  );
};
