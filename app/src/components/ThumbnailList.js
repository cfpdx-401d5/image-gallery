import React, { PropTypes } from 'react';

import ThumbnailDisplay from './ThumbnailDisplay';

function ThumbnailList(props) {

  const listThumbnail = props.images.map((imageObject, idx) => {
    return (
      < ThumbnailDisplay key={imageObject.id} deleteImage={props.deleteImage} imageObjectIdx={idx} image={imageObject} />
    );
  });
  return (
    <ul> {listThumbnail} </ul>
  );

}

ThumbnailList.propTypes = {
  images: PropTypes.array.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

export default ThumbnailList;
