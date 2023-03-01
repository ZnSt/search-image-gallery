import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export const App = () => {
  const [userSearch, setUserSearch] = useState('');

  const handleFormSubmit = value => {
    setUserSearch(value);
  };
  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery nameImage={userSearch} />
      <ToastContainer autoClose={4000} />
    </div>
  );
};
