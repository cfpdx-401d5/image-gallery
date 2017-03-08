import React, { PropTypes } from 'react';

function ThumbnailDisplayBits(props) {
  let altText = props.title + ' thumbnail';

  return (
    <tr>
      <figure>
        <img className='thumbnail' src={props.url} alt={altText} />
        <figcaption>{props.title}</figcaption>
      </figure>
    </tr>
  );
}
ThumbnailDisplayBits.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbnailDisplayBits;
