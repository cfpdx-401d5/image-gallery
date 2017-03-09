import React, { PropTypes } from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

function ThumbnailList(props) {

  const listThumbnail = props.images.map((imageObject, id) => {
    return (
      < ThumbnailDisplay image={imageObject} />
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

      /*<li key={imageObject.id} className='image-divs'>
        Title: {imageObject.title}
        <br />
        <img className='thumbnail' src={imageObject.url} alt='cute bunny'/>       
      </li>*/