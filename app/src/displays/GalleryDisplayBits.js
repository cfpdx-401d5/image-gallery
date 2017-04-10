import React, { PropTypes } from 'react';

import DeleteImageButton from '../DeleteImageButton';

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
        <DeleteImageButton deleteImage={props.deleteImage} _id={props._id} />
      </figure>
    </article>
  );
}

GalleryDisplayBits.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  _id: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GalleryDisplayBits;
