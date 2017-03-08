import React, { PropTypes } from 'react';

function ThumbnailDisplay(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.title} </p>
      <img className='thumbnail' src={props.url} alt='cute bunny'/>
    </div>
  );
}

ThumbnailDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ThumbnailDisplay;
