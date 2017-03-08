import React, { PropTypes } from 'react';

function ThumbnailList(props) {
  const listThumbnail = props.images.map((imageObject, id) => {
    return (
      <li key={imageObject.id} className='image-divs'>
        Title: {imageObject.title}
        <br />
        <img className='thumbnail' src={imageObject.url} alt='cute bunny'/>       
      </li>
    );
  });
  return (
    <ul> {listThumbnail} </ul>
  );
}

ThumbnailList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ThumbnailList;
