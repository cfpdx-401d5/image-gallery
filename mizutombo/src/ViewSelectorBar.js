import React, { PropTypes } from 'react';

function ViewSelectorBar(props) {
  return (
    <div className='view-select'>
      <button onClick={() => props.clickHandler('detail')}> Detail View </button>
      <button onClick={() => props.clickHandler('thumbnail')}> Thumbnail View </button>
      <button onClick={() => props.clickHandler('gallery')}> Gallery View </button>
      <br />
    </div>
  ); 
};

ViewSelectorBar.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ViewSelectorBar;
