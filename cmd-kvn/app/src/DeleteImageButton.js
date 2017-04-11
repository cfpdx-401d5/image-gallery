import React, { PropTypes } from 'react';

function DeleteImageButton(props) {
  return (
    <button onClick={(e) => {
      e.preventDefault();
      props.deleteImage(props._id);
    }}>
      delete
    </button>
  );
}

DeleteImageButton.propTypes = {
  deleteImage: PropTypes.func.isRequired, 
  // _id: PropTypes.string.isRequired,
};


export default DeleteImageButton;
