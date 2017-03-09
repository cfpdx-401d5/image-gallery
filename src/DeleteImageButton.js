import React from 'react';

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

/* TODO proptype validation */

export default DeleteImageButton;
