import React, { PropTypes } from 'react';
import GalleryDisplay from './GalleryDisplay';

function GalleryList(props) {
  const listGallery = props.images.map((imageObject, idx) => {
    return (
      < GalleryDisplay key={imageObject.id} deleteImage={props.deleteImage} imageObjectIdx={idx} image={imageObject} />
    );
  });
  return (
    <ul> {listGallery} </ul>
  );
}

GalleryList.propTypes = {
  images: PropTypes.array.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

export default GalleryList;
