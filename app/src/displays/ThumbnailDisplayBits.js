import React, { PropTypes } from 'react';

import DeleteImageButton from '../DeleteImageButton';

function ThumbnailDisplayBits(props) {
  let altText = props.title + ' thumbnail';

  return (
    <tr>
      <td>
        <figure>
          <img className='thumbnail' src={props.url} alt={altText} />
          <figcaption>{props.title}</figcaption>
        </figure>
        <DeleteImageButton deleteImage={props.deleteImage} _id={props._id} />
      </td>
    </tr>
  );
}
ThumbnailDisplayBits.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  _id: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbnailDisplayBits;
