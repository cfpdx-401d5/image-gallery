import React from 'react';

export default function Thumbnail(props) {
    const thumbnail = props.array.map((item, index) => {
        return (
          <li key={index}>
            <p>title: {item.title}</p>
            <img className='thumbnail' src={item.url} alt='cute bunnys'/>
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
