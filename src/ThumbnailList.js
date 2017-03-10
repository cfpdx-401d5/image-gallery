import React, { PropTypes } from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

function ThumbnailList(props) {

  const listThumbnail = props.images.map((imageObject, id) => {
    return (
      < ThumbnailDisplay key={imageObject.id} image={imageObject} />
    );
  });
  return (
    <ul> {listThumbnail} </ul>
  );

}

ThumbnailList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ThumbnailList;
