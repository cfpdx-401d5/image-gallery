import React, { PropTypes } from 'react';

import DeleteImageButton from '../DeleteImageButton';

function ListDisplayBits(props) {

  return ( 
    <li>
      <a href={props.url}>{props.title}</a>: {props.description} 
      <DeleteImageButton deleteImage={props.deleteImage} id={props.id} />
    </li>
  );
}

ListDisplayBits.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListDisplayBits;

