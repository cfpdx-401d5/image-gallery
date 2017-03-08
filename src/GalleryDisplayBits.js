import React, { PropTypes } from 'react';

function GalleryDisplayBits(props) {
  let altText = props.title + ' gallery view';

  return (
    <article>
      <figure>
        <img src={props.url} alt={altText} />
        <figcaption>
          {props.title} <br/>
          {props.description}
        </figcaption>
      </figure>
    </article>
  );
}

GalleryDisplayBits.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GalleryDisplayBits;
