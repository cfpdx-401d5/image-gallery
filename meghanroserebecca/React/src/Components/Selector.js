import React from 'react';

export default function Selector(props) {
  const buttons = [
    {
      handle: 'thumbnail',
      name: 'Thumbnail View',
      id: 1
    },
    {
      handle: 'detail',
      name: 'Detail View',
      id: 2
    },
    {
      handle: 'gallery',
      name: 'Gallery View',
      id: 3
    }
  ];

  return (
    <div>
      {buttons.map( b => 
        <button onClick={() => props.handleClick(b.handle)} key={b.id}>{b.name}</button>
      )}
    </div>
  )
}

Selector.propTypes = {
    handleClick: React.PropTypes.func
};