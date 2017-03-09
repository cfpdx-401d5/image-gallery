import React, { PropTypes } from 'react';

function ThumbnailDisplayBits(props) {
  let altText = props.title + ' thumbnail';

  return (
    <tr>
      <td>
        <figure>
          <img className='thumbnail' src={props.url} alt={altText} />
          <figcaption>{props.title}</figcaption>
        </figure>
        <button onClick={(e) => {
          e.preventDefault();
          props.deleteImage(props.id);
        }}>
          delete
        </button>
      </td>
    </tr>
  );
}
ThumbnailDisplayBits.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbnailDisplayBits;
