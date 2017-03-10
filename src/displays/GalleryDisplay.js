import React, { PropTypes } from 'react';

import GalleryDisplayBits from './GalleryDisplayBits';

function GalleryDisplay(props) {
  const imagesAsArticles = props.images.map(imageObj => {
    return <GalleryDisplayBits key={imageObj.id} title={imageObj.title} url={imageObj.url} description={imageObj.description} deleteImage={props.deleteImage} id={imageObj.id}/>;
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};


export default GalleryDisplay;
