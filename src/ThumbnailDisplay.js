// import React, { PropTypes } from 'react';
import React from 'react';

import ThumbnailDisplayBits from './ThumbnailDisplayBits';

function ThumbnailDisplay(props) {
  const imagesAsTableRows = props.images.map(imageObj => {
    return <ThumbnailDisplayBits title={imageObj.title} url={imageObj.url} />;
  });

  return (
    <table>
        {imagesAsTableRows}
    </table>
  );
}

/* TODO: add PropTypes  */

export default ThumbnailDisplay;
