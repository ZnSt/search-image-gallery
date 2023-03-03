import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '200px',
          left: '600px',
        }}
      >
        <ColorRing
          visible={true}
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  );
};
