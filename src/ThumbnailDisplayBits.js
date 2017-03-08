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
      </td>
    </tr>
  );
}
ThumbnailDisplayBits.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbnailDisplayBits;
