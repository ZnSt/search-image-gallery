import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export const App = () => {
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const handleFormSubmit = value => {
    setUserSearch(value);
  };
  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery />
      <ToastContainer autoClose={4000} />
    </div>
  );
};
