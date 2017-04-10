import React, { PropTypes } from 'react';

import GalleryDisplayBits from './GalleryDisplayBits';

function GalleryDisplay(props) {
  const imagesAsArticles = props.images.map(imageObj => {
    return <GalleryDisplayBits key={imageObj._id} title={imageObj.title} url={imageObj.url} description={imageObj.description} deleteImage={props.deleteImage} _id={imageObj._id}/>;
  });

  return (
    <div>
        {imagesAsArticles}
    </div>
  );
}

GalleryDisplay.propTypes = {
  deleteImage: PropTypes.func.isRequired, 
  images: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};


export default GalleryDisplay;
