import React, { PropTypes } from 'react';

function ListDisplayBits(props) {

  return <li><a href={props.url}>{props.title}</a>: {props.description}</li>;
}

ListDisplayBits.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListDisplayBits;

