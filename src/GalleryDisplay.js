import React from 'react';

export default function Gallery(props) {
    return (
        <div>
            <h4>{props.babyBunBuns.title}</h4>
            <img alt={props.babyBunBuns.title} src={props.babyBunBuns.url}/>
            <p>{props.babyBunBuns.description}</p>
        </div>
    )
}