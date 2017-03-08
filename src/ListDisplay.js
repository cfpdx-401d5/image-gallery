// import React, { PropTypes } from 'react';
import React from 'react';

import ListDisplayBits from './ListDisplayBits';

function ListDisplay(props) {
  const imagesAsListElements = props.images.map(imageObj => {
    return <ListDisplayBits key={imageObj.id} title={imageObj.title} url={imageObj.url} description={imageObj.description} />;
  });

  return <ul>{imagesAsListElements}</ul>;
}

/* TODO: add PropTypes  */

export default ListDisplay;

