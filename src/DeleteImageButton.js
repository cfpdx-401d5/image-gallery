import React, { PropTypes } from 'react';

function DeleteImageButton(props) {
  return (
    <button onClick={(e) => {
      e.preventDefault();
      props.deleteImage(props.id);
    }}>
      delete
    </button>
  );
}

DeleteImageButton.propTypes = {
  deleteImage: PropTypes.func.isRequired, 
  id: PropTypes.string.isRequired,
};


export default DeleteImageButton;
