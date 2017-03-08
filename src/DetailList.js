import React, { PropTypes } from 'react';

function DetailList(props) {
  const listDetail = props.images.map((imageObject, id) => {
    return (
      <li key={imageObject.id} className='image-divs'>
        Title: {imageObject.title}
        <br />
        Description: {imageObject.description}
        <br />
        Link: {imageObject.url}      
      </li>
    );
  });
  return (
    <ul> {listDetail} </ul>
  );
}

DetailList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default DetailList;
