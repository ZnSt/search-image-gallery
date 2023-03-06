import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
      )
      .then(response => {
        setPhotos([...photos, ...response.data]);
        setCurrentPage(prevState => prevState + 1);
      })
      .finally(() => setFetching(false));
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = event => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log('scroll');
      setFetching(true);
    }
  };
  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id}>
          <div>
            {photo.id}. {photo.title}
          </div>
          <img src={photo.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
};
