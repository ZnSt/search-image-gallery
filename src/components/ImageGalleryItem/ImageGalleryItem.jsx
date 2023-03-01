import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <Item>
      <a href={largeImageURL}>
        <Img src={webformatURL} alt="cat" width="300px" height="200px" />
      </a>
    </Item>
  );
};
