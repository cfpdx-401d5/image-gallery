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
        <button onClick={(e) => {
          e.preventDefault();
          props.deleteImage(props.id);
        }}>
          delete
        </button>
      </figure>
    </article>
  );
}

GalleryDisplayBits.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GalleryDisplayBits;
