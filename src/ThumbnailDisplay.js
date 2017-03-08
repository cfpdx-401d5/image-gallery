import React, { PropTypes } from 'react';

function ThumbnailDisplay(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <img className='thumbnail' src={props.image.url} alt='cute bunny'/>
    </div>
  );
}

ThumbnailDisplay.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ThumbnailDisplay;
