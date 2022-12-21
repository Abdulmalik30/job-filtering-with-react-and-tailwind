import React from 'react';

const Image = ({ url, desc = '' }) => {
  return (
    <div>
      <img src={url} alt={desc} />
    </div>
  );
};

export default Image;
