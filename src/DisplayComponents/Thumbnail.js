import React from 'react';

export default function ThumbnailDisplay(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <img className='thumbnail' src={props.resource.url} alt='Cute Bunny'/>
      <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
    </div>
  )    
}