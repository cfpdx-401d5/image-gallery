import React, { PropTypes } from 'react';

function DisplaySelector(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setDisplay('list');
        }}
      >
        List
      </button>

      <button 
        onClick={() => {
          props.setDisplay('thumbnail');
        }}
      >
        Thumbnail
      </button>

      <button
        onClick={() => {
          props.setDisplay('gallery');
        }}
      >
        Gallery
      </button>
    </div>
  );
}
DisplaySelector.propTypes = {
  setDisplay: PropTypes.func.isRequired,
};

export default DisplaySelector;
