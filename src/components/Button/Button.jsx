import { LoadMore } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <div
      style={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <LoadMore type="button" onClick={loadMore}>
        Load More
      </LoadMore>
    </div>
  );
};
