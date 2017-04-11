import React from 'react';

export default function List(props) {
    const listItem = props.puppies.map(puppies => {
        return (
            <ListDisplay key={puppies._id} puppies={puppies} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

function ListDisplay(props) {
    return (
        <div className="clearfix">
          <li>
            <p>Title: {props.puppies.title}</p>
            <p>Description: {props.puppies.description}</p>
            <p>Url: <a href={props.puppies.url}>{props.puppies.url}</a></p>
            <div className="delete"><button className="shadow animate orange" onClick={() => props.onDelete(props.puppies._id)}>Delete</button></div>
          </li>
        </div>
    );
}

