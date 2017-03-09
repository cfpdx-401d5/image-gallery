import React from 'react';

export default function DetailDisplay(props) {
    return (
        <div>
            <h4>{props.babyBunBun.title}</h4>
            <a href={props.babyBunBun.url}>See Here!</a>
            <p>{props.babyBunBun.description}</p>
        </div>
    )
}