import React, { PropTypes } from 'react';

import DeleteImageButton from '../DeleteImageButton';

function ListDisplayBits(props) {

  return ( 
    <li>
      <a href={props.url}>{props.title}</a>: {props.description} 
      <DeleteImageButton deleteImage={props.deleteImage} _id={props._id} />
    </li>
  );
}

ListDisplayBits.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  // _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListDisplayBits;

