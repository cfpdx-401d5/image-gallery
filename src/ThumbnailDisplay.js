import React, { PropTypes } from 'react';

function ThumbnailDisplay(props) {
  return (
    <div className='image-divs'>
      <p>Title: {props.image.title} </p>
      <a href={props.image.url} > 
        <img className='thumbnail' alt='cute bunny' src={props.image.url} /> 
      </a>
    </div>
  );
}

ThumbnailDisplay.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ThumbnailDisplay;
