// import React, { PropTypes } from 'react';
import React from 'react';

import GalleryDisplayBits from './GalleryDisplayBits';

function GalleryDisplay(props) {
  const imagesAsArticles = props.images.map(imageObj => {
    return <GalleryDisplayBits key={imageObj.id} title={imageObj.title} url={imageObj.url} description={imageObj.description}/>;
  });

  return (
    <div>
        {imagesAsArticles}
    </div>
  );
}

/* TODO: add PropTypes  */

export default GalleryDisplay;
