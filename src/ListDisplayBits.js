import React, { PropTypes } from 'react';

function ListDisplayBits(props) {

  return ( 
    <li>
      <a href={props.url}>{props.title}</a>: {props.description} 
      <button onClick={(e) => {
        e.preventDefault();
        props.deleteImage(props.id);  
      }}>
        delete        
      </button>
    </li>
  );
}

ListDisplayBits.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListDisplayBits;

