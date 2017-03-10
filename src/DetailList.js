import React, { PropTypes } from 'react';
import DetailDisplay from './DetailDisplay';

function DetailList(props) {

  const listDetail = props.images.map((imageObject) => {
    return (
      <DetailDisplay key={imageObject.id} image={imageObject}/>
    );
  });
  return (
    <ul> {listDetail} </ul>
  );
  
}

DetailList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default DetailList;
