import React from 'react';

const GalleryItem = props => {
  return (
    <li className='photo-container ul li'>
      <img className='photo-container ul img' src={props.url} alt='pics' />
    </li>
  );
};

export default GalleryItem;