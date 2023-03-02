import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, openModal }) => {
  return (
    <Item onClick={openModal}>
      <Img src={webformatURL} alt="cat" width="300px" height="200px" />
    </Item>
  );
};
