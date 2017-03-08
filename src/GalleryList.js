import React, { PropTypes } from 'react';

function GalleryList(props) {
  const listGallery = props.images.map((imageObject, id) => {
    return (
      <li key={imageObject.id} className='image-divs'>
        Title: {imageObject.title}
        <br />
        Description: {imageObject.description}
        <br />
        <img className='gallery' src={imageObject.url} alt='cute bunny'/>       
      </li>
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
