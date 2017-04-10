import React, { PropTypes } from 'react';

import ListDisplayBits from './ListDisplayBits';

function ListDisplay(props) {
  const imagesAsListElements = props.images.map(imageObj => {
    return <ListDisplayBits key={imageObj._id} deleteImage={props.deleteImage} _id={imageObj._id} title={imageObj.title} url={imageObj.url} description={imageObj.description} />;
  });
  
  return <ul>{imagesAsListElements}</ul>;
}

ListDisplay.propTypes = {
  deleteImage: PropTypes.func.isRequired, 
  images: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};


export default ListDisplay;

