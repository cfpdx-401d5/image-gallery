import React, { PropTypes } from 'react';

function ListDisplayBits(props) {
  return (
    <ul>
      <li><a href={props.image[0].url}>{props.image[0].title}</a>: {props.image[0].description}
      </li>
    </ul>
  );
}
ListDisplayBits.propTypes = {
  arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
};

export default ListDisplayBits;

