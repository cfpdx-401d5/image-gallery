import React from 'react';

export default function ThumbnailDisplay(props) {
    return (
      <div>
        <h1>Title: {props.resource.title}</h1>
        <img className='thumbnail' src={props.resource.url} alt='Cute Bunny' />
        <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
      </div>
    );
};
