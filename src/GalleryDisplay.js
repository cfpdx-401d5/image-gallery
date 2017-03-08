import React, { PropTypes } from 'react';

function GalleryDisplay(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <img className='gallery' src={props.image.url} alt='cute bunny'/>
    </div>
  );
}

GalleryDisplay.propTypes = {
  image: PropTypes.object.isRequired,
};

export default GalleryDisplay;
