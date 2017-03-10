import React, { PropTypes } from 'react';

function Thumbnail(props) {
  let altText = props.title + ' thumbnail';

  return (
    <figure>
      <img className='thumbnail' src={props.url} alt={altText} />
      <figcaption>{props.title}</figcaption>
    </figure>
  );
}
Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
