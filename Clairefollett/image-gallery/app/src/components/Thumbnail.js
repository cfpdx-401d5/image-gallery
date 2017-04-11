import React from 'react';

export default function Thumbnail(props) {
    const thumbnail = props.puppies.map(puppies => {
        return (
            <ThumbnailDisplay key={puppies._id} puppies={puppies} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

function ThumbnailDisplay(props) {
  return (
    <div className="clearfix">
      <li>
        <p height='20px' width='200'>title: {props.puppies.title}</p>
        <img className='thumbnail' src={props.puppies.url} alt='' height='100' width='100' />
        <div className="delete"><button className="shadow animate orange" onClick={() => props.onDelete(props.puppies._id)}>Delete</button></div>
      </li>
    </div>
  );
}
