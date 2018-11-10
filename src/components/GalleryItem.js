import React from 'react';

const GalleryItem = ({url}) => {
  return (
    <li className='photo-container ul li'>
      <img className='photo-container ul img' src={url} alt='pics' />
    </li>
  );
};

export default GalleryItem;