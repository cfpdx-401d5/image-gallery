import React, { PropTypes } from 'react';

function DisplaySelector(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.clickHandler('list');
        }}
      >
        List
      </button>

      <button 
        onClick={() => {
          props.clickHandler('thumbnail');
        }}
      >
        Thumbnail
      </button>

      <button
        onClick={() => {
          props.clickHandler('gallery');
        }}
      >
        Gallery
      </button>
    </div>
  );
}
DisplaySelector.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default DisplaySelector;
