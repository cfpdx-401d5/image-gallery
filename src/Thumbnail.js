import React from 'react';

export default function Thumbnail(props) {
    return (
        <div>
            <h4>{props.babyBunBuns.title}</h4>
            <img src={props.babyBunBuns.url} height="100px" alt={props.babyBunBuns.title}/>
        </div>
    )
}