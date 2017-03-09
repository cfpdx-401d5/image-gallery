import React from 'react';

export default function List(props) {
    return (
        <div>
            <h4>{props.babyBunBuns.title}</h4>
            <a href={props.babyBunBuns.url}>See Here!</a>
            <p>{props.babyBunBuns.description}</p>
        </div>
    )
}