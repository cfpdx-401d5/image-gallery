import React from 'react';

export default function GalleryDisplay(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <img className='gallery' src={props.resource.url} alt='Cute Bunny'/>
      <p>Description: {props.resource.description}</p>
      <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
    </div>
  ) 
}