import React, { PropTypes } from 'react';

function ListDisplayBits(props) {

  return <li key={props.id}><a href={props.url}>{props.title}</a>: {props.description}</li>;
}
/* TODO: fix PropTypes  */
ListDisplayBits.propTypes = {
  // key: , // what is new Date()? string?
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListDisplayBits;

