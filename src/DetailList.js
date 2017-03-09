import React, { PropTypes } from 'react';
import DetailDisplay from './DetailDisplay';

function DetailList(props) {

  const listDetail = props.images.map((imageObject, id) => {
    return (
      <DetailDisplay image={imageObject}/>
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


      /*<li key={imageObject.id} className='image-divs'>
        Title: {imageObject.title}
        <br />
        Description: {imageObject.description}
        <br />
        <a href={imageObject.url}> Image Link </a>     
      </li>*/