import React, { PropTypes } from 'react';

function ImageSelectorBar(props) {
  return (
    <div className='image-select'>
      <button onClick={() => props.clickHandler('detail')}> Detail View </button>
      <button onClick={() => props.clickHandler('thumbnail')}> Thumbnail View </button>
      <button onClick={() => props.clickHandler('gallery')}> Gallery View </button>
      <br />
    </div>
  ); 
};

ImageSelectorBar.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ImageSelectorBar;
