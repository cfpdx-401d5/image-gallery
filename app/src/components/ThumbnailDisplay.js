import React, { PropTypes } from 'react';

function ThumbnailDisplay(props) {
  return (
    <div className='image-divs'>
      <p>Title: {props.image.title} </p>
      <a href={props.image.url} > 
        <img className='thumbnail' alt='cute bunny' src={props.image.url} /> 
      </a>
      <button className='kill-button' onClick={() => props.deleteImage(props.image) }>
        Delete
      </button>      
    </div>
  );
}

ThumbnailDisplay.propTypes = {
  image: PropTypes.object.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

export default ThumbnailDisplay;
