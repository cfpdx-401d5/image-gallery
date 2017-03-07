import React, { PropTypes } from 'react';

function List(props) {
  return (
    <ul>
      <li><a href={props.image.url}>{props.image.title}</a>: {props.image.description}
      </li>
    </ul>
  );
}
List.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default List;
