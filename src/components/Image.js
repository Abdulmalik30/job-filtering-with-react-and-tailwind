import React from 'react';

const Image = ({ url, desc = '' }) => {
  const currentImage = url
  return (
    <div>
      <img src={`${currentImage}`} alt={desc} />
    </div>
  );
};

export default Image;
