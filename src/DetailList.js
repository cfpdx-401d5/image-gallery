import React, { PropTypes } from 'react';

import DetailDisplay from './DetailDisplay';

function DetailList(props) {

  const listDetail = props.images.map((imageObject, idx) => {
    return (
      <DetailDisplay key={imageObject.id} deleteImage={props.deleteImage} imageObjectIdx={idx} image={imageObject}/>
    );
  });
  return (
    <ul> {listDetail} </ul>
  );
  
}

DetailList.propTypes = {
  images: PropTypes.array.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

export default DetailList;
