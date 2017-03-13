import React from 'react';

export default function Selector(props) {
  const buttons = [
    {
      handle: 'thumbnail',
      name: 'Thumbnail View'
    },
    {
      handle: 'detail',
      name: 'Detail View'
    },
    {
      handle: 'gallery',
      name: 'Gallery View'
    }
  ];

  return (
    <div>
      {buttons.map( b => 
        <button onClick={() => props.handleClick(b.handle)}>{b.name}</button>
      )}
    </div>
  )
}

Selector.propTypes = {
    handleClick: React.PropTypes.func
};