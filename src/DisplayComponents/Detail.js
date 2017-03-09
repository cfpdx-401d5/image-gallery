import React from 'react';

export default function DetailDisplay(props) {
  return (
    <div>
        <ul>
            <li>Title: {props.resource.title}</li>
            <li>Url: {props.resource.url}</li>
            <li>Description: {props.resource.description}</li>
        </ul>
        <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
    </div>
  )  
}
