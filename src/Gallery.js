import React, { PropTypes } from 'react';

function Gallery(props) {
  let altText = props.title + ' gallery view';

  return (
    <figure>
      <img src={props.url} alt={altText} />
      <figcaption>
        {props.title} <br/>
        {props.description}
      </figcaption>
    </figure>
  );
}
Gallery.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Gallery;
