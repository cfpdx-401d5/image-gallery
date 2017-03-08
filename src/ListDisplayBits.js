// import React, { PropTypes } from 'react';
import React from 'react';

function ListDisplayBits(props) {
  let image = props.image;

  return <li key={image.id}><a href={image.url}>{image.title}</a>: {image.description}</li>;
}
/* TODO: fix PropTypes  */
// ListDisplayBits.PropTypes = {
//   key: , // what is new Date()? string?
//   url: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default ListDisplayBits;

