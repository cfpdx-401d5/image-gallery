import React, { PropTypes } from 'react';
import GalleryDisplay from './GalleryDisplay';

function GalleryList(props) {
  const listGallery = props.images.map((imageObject, id) => {
    return (
      < GalleryDisplay image={imageObject} />
    );
  });
  return (
    <ul> {listGallery} </ul>
  );
}

GalleryList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default GalleryList;

      /*<li key={imageObject.id} className='image-divs'>
        Title: {imageObject.title}
        <br />
        Description: {imageObject.description}
        <br />
        <img className='gallery' src={imageObject.url} alt='cute bunny'/>       
      </li>*/