import React, { PropTypes } from 'react';

function Selector(props) {
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
Selector.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Selector;
