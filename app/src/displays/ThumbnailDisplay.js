import React, { PropTypes } from 'react';

import ThumbnailDisplayBits from './ThumbnailDisplayBits';

function ThumbnailDisplay(props) {
  const imagesAsTableRows = props.images.map(imageObj => {
    return <ThumbnailDisplayBits key={imageObj.id} title={imageObj.title} url={imageObj.url} deleteImage={props.deleteImage} id={imageObj.id} />;
  });

  return (
    <table>
        <tbody>
            {imagesAsTableRows}
        </tbody>
    </table>
  );
}

ThumbnailDisplay.propTypes = {
  deleteImage: PropTypes.func.isRequired, 
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};


export default ThumbnailDisplay;
