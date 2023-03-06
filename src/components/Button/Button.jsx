import { LoadMore } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <div>
      <LoadMore type="button" onClick={loadMore}>
        Load More
      </LoadMore>
    </div>
  );
};
