import React, { PropTypes } from 'react';

function GalleryDisplay(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <a href={props.image.url} >
        <img className='gallery' alt='cute bunny' src={props.image.url} />
      </a>
      <button className='kill-button' onClick={() => props.deleteImage(props.image) }>
        Delete
      </button>
    </div>
  );
}

GalleryDisplay.propTypes = {
  image: PropTypes.object.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

export default GalleryDisplay;
