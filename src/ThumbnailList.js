import React, { PropTypes } from 'react';

import ImagesList from './images.js';

function ThumbnailList(props) {
  const listThumb = ImagesList.array.map((listItem, Date) => {
    return (
      <div key={props.id} className='image-divs'>
        <p> Title: {props.title} </p>
        <img className='thumbnail' src={props.url} alt='cute bunny'/>       
      </div>
    );
  });
  return (
    <ul> {listThumb} </ul>
  );
}

ThumbnailList.propTypes = {
  array: PropTypes.array.isRequired,
  id: PropTypes.date.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ThumbnailList;
