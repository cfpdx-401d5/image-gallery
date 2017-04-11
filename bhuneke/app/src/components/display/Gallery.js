import React from 'react';

export default function GalleryDisplay(props) {
    return (
      <div>
        <h1>Title: {props.resource.title}</h1>
        <img className='gallery' src={props.resource.url} alt='Cute Bunny'/>
        <p>Description: {props.resource.description}</p>
        <button onClick={() => props.onDelete(props.resource._id)}>delete</button>
      </div>
    ); 
};
