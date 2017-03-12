import React from 'react';

export default function Thumbnail(props) {
  const thumbnail = props.array.map((schnoodle, index) => {
    return (
      <div className="clearfix" key={index}>
        <li key={index}>
          <p height='20px' width='200'>title: {schnoodle.title}</p>
          <img className='thumbnail' src={schnoodle.url} alt='' height='100' width='100' />
        </li>
      </div>
    );
  });
  return (
    <ul>{thumbnail}</ul>
  );
}

Thumbnail.propTypes = {
  array: React.PropTypes.array
};
