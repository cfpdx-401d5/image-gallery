import React from 'react';

export default function Thumbnail(props) {
    const thumbnail = props.array.map((schnoodle, index) => {
        return (
          <li key={index}>
            <p>title: {schnoodle.title}</p>
            <img className='thumbnail' src={schnoodle.url} alt='' height='100' width='100' />
          </li>
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

Thumbnail.propTypes = {
    array: React.PropTypes.array
};
