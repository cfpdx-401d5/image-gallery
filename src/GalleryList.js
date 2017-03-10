import React, { PropTypes } from 'react';
import GalleryDisplay from './GalleryDisplay';

function GalleryList(props) {
  const listGallery = props.images.map((imageObject, id) => {
    return (
      < GalleryDisplay key={imageObject.id} image={imageObject} />
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
