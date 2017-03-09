import React from 'react';

export default function GalleryDisplay(props) {
    return (
        <div>
            <h4>{props.babyBunBun.title}</h4>
            <img alt={props.babyBunBun.title} src={props.babyBunBun.url}/>
            <p>{props.babyBunBun.description}</p>
        </div>
    )
}